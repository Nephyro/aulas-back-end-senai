function valoresDigitados(n1, n2){

    let v1 = Number(n1)
    let v2 = Number(n2)

    if(n1 =='' || isNaN(n1) || n2 =='' || isNaN(n2)){
        return false
    }else{
        return true
    }
}

function operacaoSolicitada(operacao, n1, n2){

    let t1 = n1
    let t2 = n2
    let resultado
    let op = Number(operacao)


    if(op =='' || isNaN(op) || op <= 0 || op > 4){
        return false
    }else if(op == 1){
        resultado = t1 + t2
    }else if(op == 2){
        resultado = t1 - t2
    }else if(op == 3){
        resultado = t1 * t2
    }else{
        resultado = t1 / t2
    }

}

module.exports = {
    valoresDigitados,
    operacaoSolicitada
}