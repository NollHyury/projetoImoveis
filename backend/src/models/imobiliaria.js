const mongoose = require('mongoose');

const Imobiliaria = mongoose.Schema({
    nome : String,
    responsavel : String,
    endereco: String,
    cnpj: String,
    email: String,
    imoveis: [
    ],
},
    {timesTemps : true}
);

module.exports = mongoose.model('Imobiliaria', Imobiliaria)