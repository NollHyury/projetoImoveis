const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://imoveis:imoveis@cluster0-aga7s.mongodb.net/imoveis?retryWrites=true&w=majority", {
    useNewUrlParser : true,
    useFindAndModify: false
});


//rotas
app.use(require('./routes/usuarioRoutes')) //rotas usuarios
app.use(require('./routes/imovelRoutes')) // rotas dos imoveis







app.listen(3333, () => {
    console.log("esperando na porta 3333")
})
