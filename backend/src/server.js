require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/franquiaDB';

// Conectar ao MongoDB sem opções desnecessárias
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB conectado com sucesso!');
        app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
    })
    .catch(err => {
        console.error('❌ Erro ao conectar ao MongoDB:', err);
        process.exit(1);
    });
