function calcularSoma(numero1, numero2, escolhaOperacao){
      
    if(escolhaOperacao?.toLowerCase() === 'somar'){
        console.log(`O resultado da soma é: ${Number(String(numero1).replace(',', '.')) + Number(String(numero2).replace(',', '.'))}`)
        return true
    }else{
        return false
    }
     
}

function calcularSubtracao(numero1, numero2, escolhaOperacao){


    if(escolhaOperacao?.toLowerCase() === 'subtrair'){
            console.log(`O resultado da subtração é: ${Number(String(numero1).replace(',', '.')) - Number(String(numero2).replace(',', '.'))}`)
            return true
        }else{
            return false
        }

}

function calcularMultiplicacao(numero1, numero2, escolhaOperacao){

    if(escolhaOperacao?.toLowerCase() === 'multiplicar'){
        console.log(`O resultado da multiplicação é: ${Number(String(numero1).replace(',', '.')) * Number(String(numero2).replace(',', '.'))}`)
        return true
    }else{
        return false
    }

}

function calcularDivisao(numero1, numero2,escolhaOperacao){

    if(escolhaOperacao?.toLowerCase() === 'dividir'){
        console.log(`O resultado da divisão é: ${Number(String(numero1).replace(',', '.')) / Number(String(numero2).replace(',', '.'))}`)
        return true
    }else{
        return false
    }

}

module.exports = {
    calcularSoma,
    calcularSubtracao,
    calcularMultiplicacao,
    calcularDivisao
}