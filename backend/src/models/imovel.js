const mongoose = require('mongoose');

const Imovel = mongoose.Schema({
    id_imobiliaria: String,
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
    num_banheiro: Number,
    imagens: Array,

},
    {timesTemps : true}
);

module.exports = mongoose.model('Imovel', Imovel)