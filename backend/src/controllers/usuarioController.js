const Usuario = require('../models/usuario');
const Imovel = require('../models/imovel');

module.exports = {

    //metodo que busca todos os usuarios do banco de dados
    async getAll(req, res){
        const usuario = await Usuario.find();
        return res.json(usuario)
    },

    

    //metodo que faz o registro de um usuario no banco de dados
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



    //busca um usuario utilzando o id como parametro de busca
    async getOne(req, res){
        const usuario = await Usuario.findById(req.params.id)
        return res.json(usuario);
    },


    //busca um usuario utilizando o cpf como parametro
    async getOneByCpf(req, res){
        const usuario = await Usuario.findOne({cpf : `${req.params.cpf}`})
        res.json(usuario);
    },


    //registra no banco o id do imovel que o usuario tem como favorito
    async favoritarImovel(req, res){
        const usuario = await Usuario.findById(req.params.id);
        usuario.imoveisFavoritos.push(req.params.idImovel);

        usuario.save();
        console.log(usuario.imoveisFavoritos);


        res.json(usuario);
    },


    //remove um imovel dos favoritos
    async removerImovelFavorito(req, res){
        const usuario = await Usuario.findById(req.params.id);
        usuario.imoveisFavoritos.remove(req.params.idImovel);

        usuario.save();
        console.log(usuario.imoveisFavoritos);


        res.json(usuario);
    },

   
    //deleta um usuario pelo id
    async delete(req, res){
        let usuario = await Usuario.findByIdAndDelete(req.params.id);
        res.json(usuario);
    },



    //atualiza as informações do usuario
    async update(req, res){
        let usuario = await Usuario.findOneAndUpdate(req.params.id,req.body,{new : true});

        res.json(usuario);
    },
    

    //este metodo faz a validação de email e senha no banco de dados e retorna um json de usuario
    async checkPassword(req, res){
        let retornoJson = {
            status: Boolean,
            usuario: Object
        }
        await Usuario.findOne({email : req.body.email, senha : req.body.senha, cpf: req.body.cpf}).then(
            usuarioReq => {
                if(usuarioReq == null){
                    retornoJson.status = false
                    return res.json(retornoJson);
                }

                else{
                    retornoJson.status = true;
                    retornoJson.usuario = usuarioReq;
                    return res.json(retornoJson);
                }
            }
        )
    },
    

    //verifica se o imovel é um favorito
    async verificarImovelFavorito(req, res){ 
        await Usuario.findById(req.params.id).then(
            usuario =>{
                usuario.imoveisFavoritos.filter( obj =>{
                    return res.send(obj._id == req.params.idImovel);
                });
            }
        )
    },



}