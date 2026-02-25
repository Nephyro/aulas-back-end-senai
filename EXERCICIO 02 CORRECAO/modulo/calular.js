/******************************************************************************************************************
 * Objetivos: Arquivo responsável pelas funções de calcular (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
 * Data: 20/02/2026
 * Autor: Anderson Ribeiro
 * Versão: 1.0 
 ******************************************************************************************************************/

// toLoweCase() -> Retorna a sring em minusculo
// toUpperCase() -> Retorna a string e MAIUSCULO

const validarDados = function(valor1, valor2, operador){
    if(valor1 =='' || isNaN(valor1) || valor2 =='' || isNaN(valor2)){
        return false
    }else{
        return true
    }
}




// modelo de função anônima - a função não tem um name,
// na verdade o nome será a const onde ela será armazenada

// calcular as 4 operações matemáticas
const calcular = function(numero1, numero2, operador){
    //Entradas
    let valor1              = Number(numero1)
    let valor2              = Number(numero2)
    let operadorMatematico  = String(operador).toUpperCase()
    let resultado

    // Condicionais para validar qual o tipo de operação matemática
    // A ausencia da { }  no condicional é porque qualquel condicional que tenha apenas uma linha
    // de processamento a { } torna-se opcional
    // Processamento
    // if(operadorMatematico == 'SOMAR')
    //     resultado = valor1 + valor2
    // else if(operadorMatematico == 'SUBTRAIR')
    //     resultado = valor1 - valor2
    // else if(operadorMatematico == "MULTIPLICAR")
    //     resultado = valor1 * valor2
    // else if(operadorMatematico == 'DIVIDIR')
    //     resultado = valor1 / valor2
    // return resultado

    //Saída
    // if(resultado != undefined)
    //     return Number(resultado).toFixed(2)
    // else
    //     return false

    switch (operadorMatematico) {
        case 'SOMAR': //if
            resultado = somar(valor1, valor2)
            break;
        case 'SUBTRAIR': //else if
            resultado = subtrair(valor1, valor2)
            break;
        case 'MULTIPLICAR': //else if
            resultado = multiplicar(valor1, valor2)
            break;
        case 'DIVIDIR': //else if
            resultado = dividir(valor1, valor2)
            break;
        default: //else
        return false
            break;
    }

    return resultado
    
}

// Exemplo de funções baseada em SETA (Arrow function)
// Funções para ralizar as operações matemáicas
const somar         = (numero1, numero2) => Number(numero1) + Number(numero2)
const subtrair      = (numero1, numero2) => Number(numero1) - Number(numero2)
const multiplicar   = (numero1, numero2) => Number(numero1) * Number(numero2)
const dividir       = (numero1, numero2) => Number(numero1) / Number(numero2)

// por se tratar de uma única linha de função, a própria seta faz o paple de return
// então não precisa escrever return

module.exports = {
    calcular,
    somar,
    subtrair,
    multiplicar,
    dividir,
    validarDados
}