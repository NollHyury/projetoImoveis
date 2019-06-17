const mongoose = require('mongoose');

const Imobiliaria = mongoose.Schema({
    nome : String,
    responsavel : String,
    endereco: String,
    cnpj: String,
    email: String,
},
    {timesTemps : true}
);

module.exports = mongoose.model('Imobiliaria', Imobiliaria)