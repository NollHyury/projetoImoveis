const imobiliariaController = require('../controllers/imobiliariaController');
const express = require( 'express' )
const routes = new express.Router()

routes.post('/imobiliaria',imobiliariaController.post);
routes.get('/imobiliaria/:id',imobiliariaController.getOne);
routes.get('/imobiliaria',imobiliariaController.getAll);
routes.put('/imobiliaria/:id',imobiliariaController.put)
routes.delete('/imobiliaria/:id',imobiliariaController.delete);
routes.put('/imobiliaria/:id/:imovelId', imobiliariaController.adicionarImovel);
routes.delete('imobiliaria/:id/:imovelId',imobiliariaController.deletarImovel);



module.exports = routes;
