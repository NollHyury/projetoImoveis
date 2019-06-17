const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nome: String,
    sobrenome: String,
    email: String,
    senha: String,
    endereco: String,
    cpf: String,
    telefone: String,
    imoveisFavoritos: [
        {id_imovel : String}
    ],
},{
    timestamps: true,
}
);

module.exports = mongoose.model('Usuario', UsuarioSchema);