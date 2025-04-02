const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Carregar variáveis de ambiente

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Habilitar CORS
app.use(express.json()); // Permitir requisições com JSON

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI, {})
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.log('Erro de conexão:', err));

app.get('/', (req, res) => {
    res.send('API de Gerenciamento de Franquias');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
