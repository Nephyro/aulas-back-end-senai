/************************************************************
 * Objetivo: Arquivo responsável pelos cálculos e tratativas
 * da aplicação
 * Autor: Anderson Ribeiro
 * Data: 13/02/2026
 * Versão: 1.1
 * **********************************************************/

function verificacao(numero1, numero2, escolhaOperacao){

    let n1 = Number(String(numero1).replace(',', '.'))
    let n2 = Number(String(numero2).replace(',', '.'))

    const validacaoOperacoes = ['somar', 'subtrair', 'multiplicar', 'dividir']

    if(typeof escolhaOperacao !== 'string' || !validacaoOperacoes.includes(escolhaOperacao.toLowerCase()) || isNaN(n1) || isNaN(n2)){
        return 'ERRO! Operação inválida'
    }
        return false

}

function calcularSoma(numero1, numero2, escolhaOperacao){

    let n1 = Number(String(numero1).replace(',', '.'))
    let n2 = Number(String(numero2).replace(',', '.'))
            
    if(escolhaOperacao?.toLowerCase() === 'somar'){
        return n1 + n2
    }else{
        return false
    }

     
}

function calcularSubtracao(numero1, numero2, escolhaOperacao){

    let n1 = Number(String(numero1).replace(',', '.'))
    let n2 = Number(String(numero2).replace(',', '.'))


    if(escolhaOperacao?.toLowerCase() === 'subtrair'){        
            return n1 - n2
    }else{
        return false
    }

}

function calcularMultiplicacao(numero1, numero2, escolhaOperacao){

    let n1 = Number(String(numero1).replace(',', '.'))
    let n2 = Number(String(numero2).replace(',', '.'))

    if(escolhaOperacao?.toLowerCase() === 'multiplicar'){
            return n1 * n2
    }else{
        return false
    }
}

function calcularDivisao(numero1, numero2,escolhaOperacao){

    let n1 = Number(String(numero1).replace(',', '.'))
    let n2 = Number(String(numero2).replace(',', '.'))

    if(escolhaOperacao?.toLowerCase() === 'dividir'){

        if(n2 === 0){
            console.log('ERRO! Não é possível dividir por zero')
            return false
            
        }

            console.log(`O resultado da divisão é: ${n1 / n2}`)
            return true
    }else{
        return false
    }


}

module.exports = {
    verificacao,
    calcularSoma,
    calcularSubtracao,
    calcularMultiplicacao,
    calcularDivisao
}