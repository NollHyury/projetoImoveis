const express = require('express');
const multer = require('multer');
const imageConfig = require('../../config/upload')

const imovelController = require('../controllers/imovelController')

const routes = new express.Router();

const upload = multer(imageConfig);

//ROUTES
routes.post('/imovel',upload.single('image'),imovelController.post);
routes.get('/imovel/:id',imovelController.getOne);
routes.get('/imovel',imovelController.getAll);
routes.put('/imovel',imovelController.put)
routes.delete('/imovel',imovelController.delete);

module.exports = routes;