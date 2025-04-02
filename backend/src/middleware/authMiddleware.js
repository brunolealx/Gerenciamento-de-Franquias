const jwt = require('jsonwebtoken');

// Middleware de autenticação
const authMiddleware = (req, res, next) => {
    // Pegando o token do cabeçalho "Authorization"
    const token = req.header('Authorization')?.replace('Bearer ', ''); // A parte após "Bearer "

    // Se não houver token, retorna erro
    if (!token) {
        return res.status(401).json({ erro: 'Acesso negado. Nenhum token fornecido.' });
    }

    try {
        // Verifica o token com a chave secreta
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Adiciona o usuário decodificado ao objeto req para usar em rotas subsequentes
        req.user = decoded.user;

        // Chama o próximo middleware ou rota
        next();
    } catch (error) {
        return res.status(401).json({ erro: 'Token inválido ou expirado.' });
    }
};

module.exports = authMiddleware;
