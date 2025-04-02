const express = require('express');
const router = express.Router();
const franquiaController = require('../controllers/franquiaController');

// Rotas da franquia
router.post('/', franquiaController.criarFranquia);
router.get('/', franquiaController.listarFranquias);
router.put('/:id', franquiaController.atualizarFranquia);
router.delete('/:id', franquiaController.deletarFranquia);

module.exports = router;

