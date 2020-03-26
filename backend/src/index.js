const express = require('express');//importando para dentro da constante
const cors = require('cors');
const app = express();//Inciando o express
const routes = require('./routes');

app.use(express.json());//Para poder usar requisição por rota post
//aqui é quem da acesso
app.use(cors({
     origin: 'https://meuapp.com'//qual endereço que tem acesso a aplicacao
}));
app.use(routes);

app.listen(3333, function(erro){
     if(erro){
          console.log("Erro")
     }else{
          console.log("Rodando o servidor EXPRESS")
     }
}); 