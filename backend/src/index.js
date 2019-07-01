const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');



const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use((req, res, next)=>{
    req.io = io;
    next();
})



//app.use(express.urlencoded());
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







app.use('/files', express.static(path.resolve(__dirname,'..','uploads','resized')))

server.listen(3333, () =>{
    console.log('rodando na porta 333')
});
