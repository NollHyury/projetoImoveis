const imobiliariaController = require('../controllers/imobiliariaController');
const express = require( 'express' )
const routes = new express.Router()

routes.post('/imobiliaria',imobiliariaController.post);
routes.get('/imobiliaria/:id',imobiliariaController.getOne);
routes.get('/imobiliaria',imobiliariaController.getAll);
routes.put('/imobiliaria',imobiliariaController.put)
routes.delete('/imobiliaria',imobiliariaController.delete);

module.exports = routes;
