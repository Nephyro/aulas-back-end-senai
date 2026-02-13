/********************************************************
 * Objetivo: Desenvolver uma aplicação para a empressa
 * Cálculos SA
 * Autor: Anderson
 * Data: 13/02/2026
 * Versão: 1.0
 * ******************************************************/

// Importando biblioteca do readline
const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Insira o primeiro número:', function(numero1){
    let n1 = numero1

    entradaDeDados.question('Insira o segundo número:', function(numero2){
        let n2 = numero2

        entradaDeDados.question('Qual operação realizar? 1- SOMAR; 2- SUBTRAIR; 3- MULTIPLICAR; 4- DIVIDIR:', function(escolha){
            let escolhaDigitada = escolha.toLocaleLowerCase()

            let sistema = require('./modulo/sistema.js')

            let resultado = sistema.valoresDigitados(n1, n2, escolhaDigitada)
            let teste = sistema.operacaoSolicitada( n1, n2)

            console.log('Operação realizada: ' + teste)
        })
    })
})