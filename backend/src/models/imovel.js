const mongoose = require('mongoose');

const Imovel = mongoose.Schema({
    
    endereco: String,
    preco: Number,
    num_quarto: Number,
    num_sala: Number,
    num_garagem: Number,
    cozinha: Boolean,
    metros_quadrados: Number,
    varanda: Boolean,
    elevador: Boolean,
    condominio: Boolean,
    imagens: Array,
    complemento: String,
    num_banheiro: Number,
},
    {timesTemps : true}
);

module.exports = mongoose.model('Imovel', Imovel)