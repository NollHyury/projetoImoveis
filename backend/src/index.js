const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');



const app = express();
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cors())



mongoose.connect("mongodb+srv://imoveis:imoveis@cluster0-aga7s.mongodb.net/imoveis?retryWrites=true&w=majority", {
    useNewUrlParser : true,
    useFindAndModify: false
});


//rotas
app.use(require('./routes/imobiliariaRoutes')); //rotas imobiliaria
app.use(require('./routes/usuarioRoutes')); //rotas usuarios
app.use(require('./routes/imovelRoutes')); // rotas dos imoveis









app.listen(3333, () => {
    console.log("esperando na porta 3333")
})
