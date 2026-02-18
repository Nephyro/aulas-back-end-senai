/********************************************************
 * Objetivo: Desenvolver uma aplicação para a empressa
 * Cálculos SA
 * Autor: Anderson
 * Data: 13/02/2026
 * Versão: 1.1
 * ******************************************************/

// Importando biblioteca do readline
const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Qual operação deseja realizar? 1- SOMAR; 2- SUBTRAIR; 3- MULTIPLICAR; 4- DIVIDIR: ', function(escolha){
    let escolhaOperacao = escolha

    let tratativa = require('./modulo/tratativa.js')

    tratativa.tratativaString(escolhaOperacao)

    entradaDeDados.question('Insira o primeiro número: ', function(numero1){
        let n1 = numero1

        entradaDeDados.question('Insira o segundo número: ', function(numero2){
            let n2 = numero2

            let calculos = require('./modulo/sistema.js')


            calculos.calcularSoma(n1, n2, escolhaOperacao)
            calculos.calcularSubtracao(n1, n2, escolhaOperacao)
            calculos.calcularMultiplicacao(n1, n2, escolhaOperacao)
            calculos.calcularDivisao(n1, n2, escolhaOperacao)
        
        })
    })
})