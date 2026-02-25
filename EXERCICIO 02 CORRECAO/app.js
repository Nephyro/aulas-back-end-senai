/************************************************************************************************
 * Objetivos: Arquivo responsável pelas entradas e saída de dados da aplicação
 * Data: 20/02/2026
 * Autor: Anderson Ribeiro
 * Versão: 1.0 
 ************************************************************************************************/

// Import da biblioteca para calculos
const calculosMatematicos = require('./modulo/calular.js')

// let resposta = calculosMatematicos.calcular(10, 60, 'somar')
// let respostaSoma = calculosMatematicos.somar(50, 30)

// console.log(resposta)
// console.log(respostaSoma)
let valor1 = 10
let valor2 = 30

let validar = calculosMatematicos.validarDados(valor1, valor2, 'somar')

if(validar){
    return calculosMatematicos.calcular(valor1, valor2, operador)
    console.log(resultado)
}
