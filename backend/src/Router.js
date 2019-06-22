const express = require('express');
const Router = new express.Router();



Router.use(require('./routes/imobiliariaRoutes'))
Router.use(require('./routes/visitaRoutes'))
Router.use(require('./routes/usuarioRoutes'))
Router.use(require('./routes/imovelRoutes'))

module.exports = Router;

