
// Arquivo ponto de netrada da aplicação e importação das dependências
const express = require('express'); // A mais importante, lida com as rotas, parametros e respostas
const mongoose = require('mongoose');
const path =require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server); //comunicação em tempo real

mongoose.connect('mongodb+srv://bootcamp:bootcamp@cluster0-0uqsf.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser:true,
});// banco de dados

app.use((req,res, next)=>{ //repassa para todas as rotas
  req.io = io;
  next();
})
app.use(cors());//permite acesso
app.use('/files', express.static(path.resolve(__dirname,'..','uploads','resized')));

app.use(require('./routes')); //declara rotas da aplicação

server.listen(3333);
