const Imobiliaria = require('../models/imobiliaria');


module.exports = {

    //busca todas as imobiliarias 
    async getAll(req,res){
        await Imobiliaria.find().then(
            imobiliaria =>{
                return res.json(imobiliaria)
            }
        );
    },


    //busca uma imobiliaria pelo id
    async getOne(req,res){
        await Imobiliaria.findById(req.params.id).then(
            imobiliaria => {  
                return res.json(imobiliaria);
            }
        ).catch(
            res.send('algo deu errado')
        )
    },

    //busca uma imobiliaria pelo cnpj
    async getOneByCnpj(req,res){
        await Imobiliaria.findOne(
            {cnpj : req.params.cnpj}
        ).then(
            imobiliaria => {
                return res.json(imobiliaria)
            }
        )
    },


    //cria uma imobiliaria no banco de dados
    async post(req,res){

        let {nome , responsavel, endereco, cnpj, email } = req.body;
        await Imobiliaria.create({
            nome,
            responsavel,
            endereco,
            cnpj,
            email
        }).then(
            imobiliaria => {
                return res.json(imobiliaria);
            }
        )
    },


    //atualiza os dados de uma imobiliaria
    async put(req,res){
        await Imobiliaria.findOneAndUpdate(req.params.id,req.body,{new : true}).then(
            imobiliaria =>{
                return res.json(imobiliaria);
            }
        )
    },


    //deleta uma imobiliaria pelo ID
    async delete(req,res){
        await Imobiliaria.findByIdAndDelete(req.params.id).then(
            imobiliaria => {
                return res.json(imobiliaria);
            }
        )
    },


    //adiciona o id do imovel criado em uma imobiliaria atravez do id da mesma
    async adicionarImovel(req,res){
        let imovel = {
            id: req.params.idImovel
        }
        
        await Imobiliaria.findOneAndUpdate(req.params.id,
            {$push: {imoveis: imovel.id}}).then(
            imobiliaria =>{
                return res.json(imobiliaria);
            }
        )
    },


    //deleta imoveis de uma imobiliaria 
    async deletarImovel(req, res){
        await Imobiliaria.findOne(req.params.id).then(
            imobiliaria =>{
                imobiliaria.imoveis.remove(req.params.imovelId);
                imobiliaria.save();
                return res.json(imobiliaria);
            }
        ) 
    },

}