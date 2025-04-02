// src/models/Franquia.js
const mongoose = require('mongoose');

const FranquiaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    cnpj: {
        type: String,
        required: true,
        unique: true
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    dataCriacao: {
        type: Date,
        default: Date.now
    }
});

const Franquia = mongoose.model('Franquia', FranquiaSchema);

module.exports = Franquia;
