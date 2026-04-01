/* *******************************************************************************
* Objetivo: Arquivo responsável pela criação da API do projeto Estados e Cidades
* Data: 01/04/206  
* Autor: Anderson
* Versão: 1.0
* 
* Instalação do EXPRESS - npm install express --save
*       Dependencia responsável pela utilização do protocolo HTTP para
*       criar uma API
* 
* Instalação do CORS    - npm install cors --save
*       Dependencia responsável pelas configurações a serem realizadas
*       para a permissão de acesso da API
* 
* ********************************************************************************/

// Import das depedencias para criar a API
const express = require('express')
const cors = require('cors')

// Criando um objeto para manipular o express
const app = express()

// Conjunto de permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin: ['*'], //A origem da requisição, podendo um IP ou *(Todos)
    methods: 'GET', //São os verbos que serão liberados na API (GET, POST, PUT e DELET)
    allowedHeaders: ['Content-type', 'Autorization'] //São permissões de cabeçalho do CORS
}

// Configura as permissões da API atráves do CORS
app.use(cors(corsOptions))

// Response -> Retornos da API
// Request  -> São chegadas de dados na API

// Import do arquivo de funções
const estadosCidades = require('./modulo/funcoes.js')

// Criando EndPoints para a API
app.get('/v1/senai/estados', function(request, response){

    // Chama a função que retorna a lita de estados
    let estados = estadosCidades.getListaDeEstados()

    response.json(estados)
    response.status(200)
})

app.get('/cidades', function(request, response){
    response.json({"message": "Testando minha API de Cidades"})
    response.status(200)
})

app.get('/v1/senai/dados/estado/:uf', function(request, response){
    let sigla = request.params.uf
    let estado = estadosCidades.getDadosEstado(sigla)

    response.json(estado)
    response.status(200)
})

// Serve para inicializar a API para receber requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requisições...')
})