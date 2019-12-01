const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Carro = new Schema({

    marca: {
        type: String,
        required: true
    },

    modelo: {
        type: String,
        required: true
    },

    ano: {
        type: String,
        required: true
    },

    kilometragem: {
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model('Carro', Carro);