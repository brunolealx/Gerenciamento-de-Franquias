const Franquia = require('../models/Franquia'); // Importando o modelo

// Criar uma nova franquia
exports.criarFranquia = async (req, res) => {
    try {
        const { nome, cnpj, endereco, telefone } = req.body;

        // Verificação de campos obrigatórios
        if (!nome || !cnpj || !endereco || !telefone) {
            return res.status(400).json({ erro: 'Todos os campos são obrigatórios!' });
        }

        const franquiaExistente = await Franquia.findOne({ cnpj });

        if (franquiaExistente) {
            return res.status(400).json({ erro: 'Já existe uma franquia com esse CNPJ!' });
        }

        const novaFranquia = new Franquia({ nome, cnpj, endereco, telefone });
        await novaFranquia.save();
        res.status(201).json(novaFranquia);
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
        const franquiaAtualizada = await Franquia.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!franquiaAtualizada) {
            return res.status(404).json({ erro: 'Franquia não encontrada!' });
        }

        res.json(franquiaAtualizada);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao atualizar franquia', detalhe: error.message });
    }
};

// Deletar franquia por ID
exports.deletarFranquia = async (req, res) => {
    try {
        const franquia = await Franquia.findById(req.params.id);

        if (!franquia) {
            return res.status(404).json({ erro: 'Franquia não encontrada!' });
        }

        await Franquia.findByIdAndDelete(req.params.id);
        res.json({ mensagem: 'Franquia deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao deletar franquia', detalhe: error.message });
    }
};
