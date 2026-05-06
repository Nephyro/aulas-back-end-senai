/********************************************************************************
 * Objetivo: Arquivo responsável pela validação, tratamento e 
 *      manipulação para o CRUD de filmes
 * Data: 17/04/2026
 * Autor: Anderson Ribeiro
 * Versão: 1.0
 ********************************************************************************/

// Import do arquivo de padronização de mensagens
const config_message = require('../modulo/configMessages.js')

// Import do arquivo DAO para fazer o CRUD do filme no banco de dados
const filmeDAO = require('../../model/DAO/filme/filme.js')

// Função para inserir um novo filme
const inserirNovoFilme = async function(filme, contentType) {

    // Criando um clone do objeto JSON para manipular a sua estrutura local sem 
    // modificar a estruturo original
    let message = JSON.parse(JSON.stringify(config_message))

    try {
          
        // Validação para o tipo de dados da requisição (somente JSON)
        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

            // Validação de dados para os atributos do Filme (Status 400 - Bad Request)
            let validar = await validarDados(filme)

            // Se a função validar retornar um json de erro, iremos devolver ao 
            // APP o erro
            if(validar){
                return validar //400
            }else{
                // Encaminha os dados do filme para o DAO
                let result = await filmeDAO.insertFilme(filme)

                if(result){ //201
                    // Criando o atributo ID no JSON do filme e colocando
                    // o ID gerad após o insert
                    filme.id = result

                    message.DEFUAL_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                    message.DEFUAL_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                    message.DEFUAL_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message
                    message.DEFUAL_MESSAGE.response = filme
                }else{  //500
                    return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)
                }

                return message.DEFUAL_MESSAGE
            }
        }else{
            return message.ERROR_CONTENT_TYPE //415
        }
    
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    }

}

// Função para atualizar um filme existente
const atualizarFilme = async function(filme, id, contentType) {

    let message = JSON.parse(JSON.stringify(config_message))

    try {
        // Validação do content type para receber apenas JSON
        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){
            // Validação para o ID incorreto
            let resultBuscarID = await buscarFilme(id)

            // Se a função encontrar o filme o atributo status do JSON será verdadeiro
            // Isso significa que o filme existe na base, caso não retorne true, então
            // o  retorno da função poderá ser um 400 ou 404 ou até mesmo um 500
            if(resultBuscarID.status){
                let validar = await validarDados(filme)

                // Validação de campos obrigatórios para a atualização (Body)
                if(!validar){
                    // Adiciono o atributo ID do filme no JSON para ser enviado ao DAO
                    filme.id = id //Garantir que o ID do filme seja o mesmo do parâmetro da função

                    // Chama a função do DAO para atualizar o filme (dados e o ID)
                    let result = await filmeDAO.updateFilme(filme)

                    if(result){
                        message.DEFUAL_MESSAGE.status = message.SUCCESS_UPDATED_ITEM.status
                        message.DEFUAL_MESSAGE.status_code = message.SUCCESS_UPDATED_ITEM.status_code
                        message.DEFUAL_MESSAGE.message = message.SUCCESS_UPDATED_ITEM.message
                        message.DEFUAL_MESSAGE.response = filme

                        return message.DEFUAL_MESSAGE //200 (Atualizado)

                    }else{
                        return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)
                    }

                }else{
                    return validar //400
                }
            }else{
                return resultBuscarID //400 ou 404 ou 500
            }

        }else{
            return message.ERROR_CONTENT_TYPE //415
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)   
    }
}

// Função para retornar todos os filmes cadastrados
const listarFilme = async function() {
    // Criando um clone do objeto JSON para manipular a sua estrutura local sem 
    // modificar a estruturo original
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        // Chama a função do DAO para retornar a lista de todos os filmes
        let result = await filmeDAO.selectAllFilme()

        // Validação para verificar se o DAO conseguiu processar os dados
        if(result){
            // Validação para verificar se existe conteúdo no array
            if(result.length > 0){
                message.DEFUAL_MESSAGE.status = message.SUCCESS_RESPONSE.status
                message.DEFUAL_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                message.DEFUAL_MESSAGE.response.count = result.length
                message.DEFUAL_MESSAGE.response.filme = result

                return message.DEFUAL_MESSAGE //200 (Dados do filme)
            }else{
                return message.ERROR_NOT_FOUND //404
            }
        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)
        }

    } catch (error) {
        console.log("Erro no controller listarFilme:", error);
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    } 
}

// Função para buscar um filme pelo ID
const buscarFilme = async function(id) {
    // Criando um clone do objeto JSON para manipular a sua estrutura local sem 
    // modificar a estruturo original
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        // Validação para garantir que o ID seja válido
        if(id == undefined || id == '' || id == null || isNaN(id)){
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        }else{
            let result = await filmeDAO.selectByIdFilme(id)

            if(result){
                if(result.length > 0){
                    message.DEFUAL_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFUAL_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFUAL_MESSAGE.response.filme = result

                    return message.DEFUAL_MESSAGE //200
                }else{
                    return message.ERROR_NOT_FOUND //404
                } 
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)
            }
        }
    } catch (error) {
        console.log("Erro no controller buscarFilme:", error);
        
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    }
}

// Função para excluir um filme
const excluirFilme = async function(id) {
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        //Validação do erro 500 e 404
        let resultBuscarID = await buscarFilme(id)
        
        // Validação para verificar se o status é verdadeiro(se existe o filme)
        if(resultBuscarID.status){
            let result = await filmeDAO.deleteFilme(id)

            if(result){
                return message.SUCCESS_DELETED_ITEM //200 (Registro excluído)
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)
            }
        }else{
            return resultBuscarID //400 ou 404 ou 500
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    }
}

// Função para validar todos os dados de filme 
// (obrigatórios, tipo de dado, tamanho, etc)
const validarDados = async function(filme) {

    let message = JSON.parse(JSON.stringify(config_message))
    
    if(filme.nome == undefined || filme.nome == '' || filme.nome == null || filme.nome.length > 80){
        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400
    }else if(filme.data_lancamento == undefined || filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento.length != 10){
        message.ERROR_BAD_REQUEST.field = '[DATA_LANCAMENTO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400
    }else if(filme.duracao == undefined || filme.duracao == '' || filme.duracao == null || filme.duracao.length < 5){
        message.ERROR_BAD_REQUEST.field = '[DURAÇÃO] INVÁLIDO' 
        return message.ERROR_BAD_REQUEST //400
    }else if( filme.sinopse == undefined || filme.sinopse == '' || filme.sinopse == null){
        message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400
    }else if(isNaN(filme.avaliacao) || filme.avaliacao.length > 3){
        message.ERROR_BAD_REQUEST.field = '[AVALIAÇÃO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400
    }else if(filme.valor == undefined || filme.valor == '' || filme.valor == null || filme.valor.split('.')[0].length > 3 || isNaN(filme.valor)){
        message.ERROR_BAD_REQUEST.field = '[VALOR] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400
    }else if(filme.capa.length > 255){
        message.ERROR_BAD_REQUEST.field = '[CAPA] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400
    }else{
        return false
    }
}




module.exports = {
    inserirNovoFilme,
    listarFilme,
    buscarFilme,
    atualizarFilme,
    excluirFilme
}