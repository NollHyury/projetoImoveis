const mongoose = require('mongoose');

const Imovel = mongoose.Schema({
    idImobiliaria: String,
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
    image: String,
    complemento: String,
    num_banheiro: Number,
    tipoImovel: String,
    tipoNegocio:String,
},
    {timesTemps : true}
);

module.exports = mongoose.model('Imovel', Imovel)