/***************************************************************************
 * Objetivo: Arquivo reponsável pelas funções de Calculos para este projeto
 * Autor: Anderson
 * Data: 11/02/2026
 * Versão: 1.0
 ***************************************************************************/

// Criando uma função para Calcular o Valor da compra parcelada
// Metodo tradicional de criar uma função
function calcularJurosCompostos(valorCompra, taxaJuros, tempoPagto){
    // Recebe os argumentos da função em variáveis locais
    // As variáveis (valor, taxa e tempo são numéricas por conta da conversão)
    // Mas os argumentos (valorCompra, taxaJuros, tempoPagto ainda sarão Strings)
    let valor   = Number(valorCompra)
    let taxa    = Number(taxaJuros)
    let tempo   = Number(tempoPagto)

    // Validação para entradas vazias ou de caracteres inválidos
    if(valorCompra =='' || isNaN(valorCompra) || tempoPagto == '' || isNaN(tempoPagto)){
        console.log('ERRO: Valores de compra ou de tempo de pagamento estão incorretos.')
        return false
    }else{

        // chama a função para converter o número em percentual
        let percentual = calcularPercentual(taxa)

        // Validação para o erro do percentual na função calcularPercentual()
        if(percentual){
            let montante = valor * ((1+percentual)**tempo)
            return Number(montante.toFixed(2))
        }else{
            console.log('ERRO: Valor da taxa está incorreto.')
            return false
        }
    }

}

// Calcula o percentual de um número
function calcularPercentual(numero) {
    let numeroPerentual = Number(numero)
    
    // Validação para verificar se é um número válido
    if(numero == '' || numero <= 0 || isNaN(numero)){
        return false // Não pode processar
    }else{
        // Processamento do calculo do percentual
        let percentual = numeroPerentual / 100
        return Number(percentual.toFixed(2))
    }

    
}

// Tornando as duas funções publicas para este projeto 
module.exports = {
    calcularJurosCompostos,
    calcularPercentual
}