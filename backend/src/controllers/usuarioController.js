const Usuario = require('../models/usuario');
const Imovel = require('../models/imovel');

module.exports = {
    async getAll(req, res){
        const usuario = await Usuario.find();
        return res.json(usuario)
    },

    async post(req, res){
        const {nome, sobrenome, email, senha, endereco, cpf, telefone} = req.body;


       const usuario = await Usuario.create({
            nome,
            sobrenome,
            email,
            senha,
            endereco,
            cpf,
            telefone,
        });

        return res.json(usuario)
    },

    async getOne(req, res){
        const usuario = await Usuario.findById(req.params.id)
        return res.json(usuario);
    },

    async getOneByCpf(req, res){
        const usuario = await Usuario.findOne({cpf : `${req.params.cpf}`})
        res.json(usuario);
    },

    async favoritarImovel(req, res){
        const usuario = await Usuario.findById(req.params.id);
        usuario.imoveisFavoritos.push(req.params.idImovel);

        usuario.save();
        console.log(usuario.imoveisFavoritos);


        res.json(usuario);
    },

    async removerImovelFavorito(req, res){
        const usuario = await Usuario.findById(req.params.id);
        usuario.imoveisFavoritos.remove(req.params.idImovel);

        usuario.save();
        console.log(usuario.imoveisFavoritos);


        res.json(usuario);
    },

    async delete(req, res){
        let usuario = await Usuario.findByIdAndDelete(req.params.id);
        res.json(usuario);
    },

    async update(req, res){

        let usuario = await Usuario.findOneAndUpdate(req.params.id,req.body,{new : true});

        res.json(usuario);
    }
    


    

}