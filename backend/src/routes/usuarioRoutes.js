const express = require('express');

const usuarioController = require('../controllers/usuarioController')

const routes = express.Router();


//ROUTES
routes.post('/usuario',usuarioController.post);
routes.get('/usuario',usuarioController.getAll);
routes.get('/usuario/cpf/:cpf', usuarioController.getOneByCpf);
routes.get('/usuario/byId/:id',usuarioController.getOne);
routes.put('/usuario/:id/:idImovel', usuarioController.favoritarImovel);
routes.delete('/usuario/:id/:idImovel', usuarioController.removerImovelFavorito);
routes.delete('/usuario/:id',usuarioController.delete);
routes.put('/usuario/:id', usuarioController.update);
routes.get('/usuario/pass', usuarioController.checkPassword);
routes.get('/usuario/imoveis/:id/:idImovel', usuarioController.verificarImovelFavorito);

module.exports = routes;

