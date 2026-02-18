function tratativaString(escolhaOperacao, entradaDeDados){
    const operacaoValida = ['somar', 'subtrair', 'multiplicar', 'dividir']

    if(operacaoValida.includes(escolhaOperacao)){
        return true
    }else if(escolhaOperacao == ''){
        console.log('ERRO!')
        entradaDeDados.close()
        return false
    }else if(!isNaN(escolhaOperacao)){
        console.log('ERRO')
        entradaDeDados.close()
        return false
    }
    
}

module.exports = {
    tratativaString
}