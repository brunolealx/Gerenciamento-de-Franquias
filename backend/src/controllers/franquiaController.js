const Franquia = require('../models/Franquia'); // Importando o modelo

// Criar uma nova franquia
exports.criarFranquia = async (req, res) => {
    try {
        const { nome, cnpj, endereco, telefone } = req.body;

        // Verificação de campos obrigatórios
        if (!nome || !cnpj || !endereco || !telefone) {
            return res.status(400).json({ erro: 'Todos os campos são obrigatórios!' });
        }

        // Verifica se já existe uma franquia com esse CNPJ
        const franquiaExistente = await Franquia.findOne({ cnpj });
        if (franquiaExistente) {
            return res.status(400).json({ erro: 'Já existe uma franquia com esse CNPJ!' });
        }

        // Criando nova franquia
        const novaFranquia = new Franquia({ nome, cnpj, endereco, telefone });
        await novaFranquia.save();

        res.status(201).json({ mensagem: 'Franquia criada com sucesso!', franquia: novaFranquia });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao criar franquia', detalhe: error.message });
    }
};

// Obter todas as franquias
exports.listarFranquias = async (req, res) => {
    try {
        const franquias = await Franquia.find();
        res.json(franquias);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar franquias', detalhe: error.message });
    }
};

// Atualizar franquia por ID
exports.atualizarFranquia = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, cnpj, endereco, telefone } = req.body;

        const franquia = await Franquia.findById(id);
        if (!franquia) {
            return res.status(404).json({ erro: 'Franquia não encontrada!' });
        }

        // Verifica se o novo CNPJ já existe em outra franquia
        if (cnpj && cnpj !== franquia.cnpj) {
            const cnpjExistente = await Franquia.findOne({ cnpj });
            if (cnpjExistente) {
                return res.status(400).json({ erro: 'Já existe uma franquia com esse CNPJ!' });
            }
        }

        franquia.nome = nome || franquia.nome;
        franquia.cnpj = cnpj || franquia.cnpj;
        franquia.endereco = endereco || franquia.endereco;
        franquia.telefone = telefone || franquia.telefone;

        await franquia.save();

        res.json({ mensagem: 'Franquia atualizada com sucesso!', franquia });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao atualizar franquia', detalhe: error.message });
    }
};

// Deletar franquia por ID
exports.deletarFranquia = async (req, res) => {
    try {
        const { id } = req.params;

        const franquia = await Franquia.findById(id);
        if (!franquia) {
            return res.status(404).json({ erro: 'Franquia não encontrada!' });
        }

        await Franquia.findByIdAndDelete(id);
        res.json({ mensagem: 'Franquia deletada com sucesso!' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao deletar franquia', detalhe: error.message });
    }
};
