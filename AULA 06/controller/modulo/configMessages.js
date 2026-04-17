/********************************************************************************
 * Objetivo: Arquivo responsável pela configuração e padronização das mensagens 
 *      de resposta da API
 * Data: 17/04/2026
 * Autor: Anderson Ribeiro
 * Versão: 1.0
 ********************************************************************************/

// Padronização de cabeçalho para retorno dos endpoint da API
const DEFUAL_MESSAGE = {
    api_description: 'API para gerencia controle de Filmes',
    development: 'Anderson Ribeiro Soares',
    version: '1.0.4.26',
    status: Boolean,
    status_code: Number,
    response: {}
}

// Mensagens de erro da API
const ERROR_BAD_REQUEST = {status : false, status_code: 400, message: 'Os dados enviados na requisição não estão corretos.'}

// Mensagens de Susseso da API
const SUCCESS_CREATED_ITEM = {status : true, status_code: 201, message: 'Registro inserido com sucesso!'}

module.exports = {
    DEFUAL_MESSAGE,
    ERROR_BAD_REQUEST,
    SUCCESS_CREATED_ITEM
}