const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Importar rotas
const franquiaRoutes = require("./routes/franquias");
app.use("/api/franquias", franquiaRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Conectar ao MongoDB apenas se não estiver em ambiente de teste
if (process.env.NODE_ENV !== "test") {
    mongoose.connect(MONGO_URI)
        .then(() => {
            console.log("✅ MongoDB conectado com sucesso!");
            app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
        })
        .catch(err => console.error("Erro ao conectar no MongoDB", err));
}

module.exports = app; // Exportando o app para testes
