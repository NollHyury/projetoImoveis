const mongoose = require('mongoose');

const Visita = mongoose.Schema({
    id_imovel: String,
    id_usuario: String,
    dataHora : Date,
},
    {timesTemps : true}
);


module.exports = mongoose.model('Visita',Visita);