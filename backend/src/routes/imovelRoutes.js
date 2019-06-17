const express = require('express');

const imovelController = require('../controllers/imovelController')

const routes = new express.Router();


//ROUTES
routes.post('/imovel',imovelController.post);
routes.get('/imovel/:id',imovelController.getOne);
routes.get('/imovel',imovelController.getAll);
routes.put('/imovel',imovelController.put)
routes.delete('/imovel',imovelController.delete);

module.exports = routes;