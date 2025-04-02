// src/server.js
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/franquiaDB';
const Franquia = require('./models/Franquia');

// Conectar ao MongoDB
mongoose.connect(MONGO_URI, {

})
    .then(() => {
        Franquia.create({

            nome: "Franquia Teste",
            cnpj: "00.000.000/0001-00",
            endereco: "Rua Exemplo, 123",
            telefone: "(11) 99999-9999"
        })
            .then(() => console.log("✅ Franquia de teste criada com sucesso!"))
            .catch(err => console.error("❌ Erro ao criar franquia de teste:", err));

        console.log('✅ MongoDB conectado com sucesso!');
        // Iniciar o servidor após a conexão
        app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
    })
    .catch(err => console.error('❌ Erro ao conectar ao MongoDB:', err));
