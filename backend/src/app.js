// src/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


// Importação das rotas
const franquiaRoutes = require('./routes/franquias');
app.use('/api/franquias', franquiaRoutes);


// Rota de teste
app.get('/', (req, res) => {
    res.send('API de Gerenciamento de Franquias');
});

module.exports = app;
