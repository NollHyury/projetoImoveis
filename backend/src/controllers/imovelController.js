const Imovel = require('../models/imovel');


module.exports = {

    async getAll(req,res){
        let imovel = await Imovel.find();
        return res.json(imovel);
    },

    async getOne(req,res){
        let imovel = await Imovel.findById(req.params.id);
        return res.json(imovel)
    },

    async post(req,res){

        let {id_imobiliaria,
            endereco,
            preco,
            num_quarto,
            num_sala,
            num_garagem,
            cozinha,
            metros_quadrados,
            varanda,
            elevador,
            condominio,
        } = req.body;




        let imovel = await Imovel.create({
            id_imobiliaria,
            endereco,
            preco,
            num_quarto,
            num_sala,
            num_garagem,
            cozinha,
            metros_quadrados,
            varanda,
            elevador,
            condominio,
        })

        res.json(imovel);

    },

    async put(req,res){

    },

    async delete(req,res){

    },


    async postImage(req, res){
        await 
    },



}