const Imovel = require('../models/imovel');
const sharp = require('sharp');
const path =  require('path')
const fs =  require('fs');


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

        const {
            idImobiliaria,
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
            complemento,
            num_banheiro,
        } = req.body;

        console.log(req.body)
        /* reavaliar
        const { filename : image} = req.file;
        const [name] = image.split('.');
        const fileName = `${name}.jpg`;

        await sharp(req.file.path)// caminho até o file 
        .resize(500)
        .jpeg({quality: 70 })
        .toFile(
            path.resolve(req.file.destination, 'resized', fileName)
        );
        
        fs.unlinkSync(req.file.path)

        */
        const imovel = await Imovel.create({
            idImobiliaria,
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
            complemento,
            num_banheiro,
        })

        //req.io.emit('imovel', imovel)

        return res.json(imovel);

    },

    async put(req,res){

    },

    async delete(req,res){

    },


    async postImage(req, res){
        
    },



}