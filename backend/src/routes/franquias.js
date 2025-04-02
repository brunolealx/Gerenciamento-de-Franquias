const express = require('express');
const router = express.Router();
const franquiaController = require('../controllers/franquiaController');
const authMiddleware = require('../middleware/authMiddleware'); // Importando middleware de autenticação

// Rotas da franquia protegidas por autenticação
router.post('/', authMiddleware, franquiaController.criarFranquia);
router.get('/', authMiddleware, franquiaController.listarFranquias);
router.put('/:id', authMiddleware, franquiaController.atualizarFranquia);
router.delete('/:id', authMiddleware, franquiaController.deletarFranquia);

module.exports = router;
