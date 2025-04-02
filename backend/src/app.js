require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Importação das rotas
const authRoutes = require('./routes/auth');
const franquiaRoutes = require('./routes/franquias');

app.use('/api/auth', authRoutes);
app.use('/api/franquias', franquiaRoutes);

// Rota de teste
app.get('/', (req, res) => {
    res.send('API de Gerenciamento de Franquias');
});

module.exports = app;
