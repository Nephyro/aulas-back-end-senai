/********************************************************************************
 * Objetivo: Arquivo responsável pel
 * Data: 17/04/2026
 * Autor: Anderson Ribeiro
 * Versão: 1.0
 ********************************************************************************/

// Import das depedencias para criar a API
const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

// Import das CONTROLLERS do projeto
const controllerFilme = require('./controller/filme/controller_filme.js')

// Criando um objeto para manipular dados do body da API em formato JSON
const bodyParserJSON = bodyParser.json()

// Criando um objeto para manipular o express
const app = express()

// Conjunto de permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin: ['*'], //A origem da requisição, podendo um IP ou *(Todos)
    methods: 'GET, POST, PUT, DELET, OPTIONS', //São os verbos que serão liberados na API (GET, POST, PUT e DELET)
    allowedHeaders: ['Content-type', 'Autorization'] //São permissões de cabeçalho do CORS
}

// Configura as permissões da API atráves do CORS
app.use(cors(corsOptions))

// ENDPOINTS
app.post('/v1/senai/locadora/filme', bodyParserJSON, async function(request, response){
    // Recebe o conteúdo dentro do body da requisição e armazena em uma variável local
    let dados = request.body
    // Recebe o content type da requisição, para validar se é um JSON
    let contentType = request.headers['content-type']
    

    let result = await controllerFilme.inserirNovoFilme(dados, contentType)
    
    response.status(result.status_code)
    response.json(result)

})

app.get('/v1/senai/locadora/filme', async function(request, response){
    let result = await controllerFilme.listarFilme()

    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/filme/:id', async function(request, response){
    // Recebe o ID via parâmetro
    let id = request.params.id

    let result = await controllerFilme.buscarFilme(id)

    response.status(result.status_code)
    response.json(result)
})

// Serve para inicializar a API para receber requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requisições...')
})