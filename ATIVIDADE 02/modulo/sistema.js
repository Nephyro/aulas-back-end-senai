


// function executarOperacao(numero1, numero2, escolhaOperacao){

//     const nomesValidos = ['somar', 'subtrair', 'multiplicar', 'dividir']
//     let operacao = escolhaOperacao?.toLowerCase()

//     if(!nomesValidos.includes(operacao)){
//         return 'ERRO! Operação inválida'
//     }

//     let n1 = Number(String(numero1).replace(',', '.'))
//     let n2 = Number(String(numero2).replace(',', '.'))

//     if(isNaN(n1) || isNaN(n2)){
//         return 'Erro! Digite apenas números válidos'
//     }

// }



function calcularSoma(numero1, numero2, escolhaOperacao){

    let n1 = Number(String(numero1).replace(',', '.'))
    let n2 = Number(String(numero2).replace(',', '.'))
      
    if(escolhaOperacao?.toLowerCase() === 'somar'){
        console.log(`O resultado da soma é: ${n1 + n2}`)
        return true
    }else{
        return false
    }
     
}

function calcularSubtracao(numero1, numero2, escolhaOperacao){

    let n1 = Number(String(numero1).replace(',', '.'))
    let n2 = Number(String(numero2).replace(',', '.'))


    if(escolhaOperacao?.toLowerCase() === 'subtrair'){
            console.log(`O resultado da subtração é: ${n1 - n2}`)
            return true
        }else{
            return false
        }

}

function calcularMultiplicacao(numero1, numero2, escolhaOperacao){

    let n1 = Number(String(numero1).replace(',', '.'))
    let n2 = Number(String(numero2).replace(',', '.'))

    if(escolhaOperacao?.toLowerCase() === 'multiplicar'){
        console.log(`O resultado da multiplicação é: ${n1 * n2}`)
        return true
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
    }


}

module.exports = {
    // executarOperacao,
    calcularSoma,
    calcularSubtracao,
    calcularMultiplicacao,
    calcularDivisao
}