/************************************************************************************************
 * Objetivos: Arquivo responsável por gerar a tabuada de um número
 * Data: 25/02/2026
 * Autor: Anderson Ribeiro
 * Versão: 1.0 
 ************************************************************************************************/
// Import da biblioteca de calculos matematicos
const calculosMatematicos = require('./calular.js')


// Função para imprimir a tabuada usando While
const gerarTabuada = function(tabuada){
    let tab = Number(tabuada)
    let cont = 0
    let resultado

    // Repetição para gerar a tabuada até 10
    while(cont <= 10){
        // chama a função de multiplicar para realizar a operação
        resultado = calculosMatematicos.multiplicar(tab, cont)
        console.log(`${tab} x ${cont} = ${resultado}`)
        
        // cont = cont + 1
        // cont++
        cont +=1
    }
}

// gerarTabuada(5)


const gerarTabuadaFor = function(tabuada){
    let tab = Number(tabuada)

    // let cont = 0
    let resultado

    // Repetição para gerar a tabuada até 10
    for(let cont = 0; cont <= 10; cont++){
        // chama a função de multiplicar para realizar a operação
        resultado = calculosMatematicos.multiplicar(tab, cont)
        console.log(`${tab} x ${cont} = ${resultado}`)
        
    }
}

gerarTabuadaFor(9)