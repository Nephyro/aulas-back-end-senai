//Importar biblioteca
const readline = require(`readline`)

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Por favor digite o seu nome: ', function perguntarNome(nome){ 

    let nomeCliente = nome

    if(!isNaN(nomeCliente) || nomeCliente ===''){
        console.log(`ERRO: O nome ${nomeCliente} não é válido! Por favor utilize apenas letras`)
         entradaDeDados.question('Por favor digite o seu nome: ', perguntarNome)
         
    }else{
        entradaDeDados.question(`Olá ${nomeCliente}, qual produto deseja comprar: `, function perguntarProduto(produto){

            let nomeProduto = produto

            if(!isNaN(nomeProduto) || nomeProduto ===''){
                console.log(`ERRO: O nome ${nomeProduto} não é válido para produto! Por favor utilize apenas letras`)
                entradaDeDados.question(`Olá ${nomeCliente}, qual produto deseja comprar: `, perguntarProduto)

            }else{
                 entradaDeDados.question(`Qual o valor do ${nomeProduto}: R$`, function perguntarValor(valor){

                    let valorProduto = valor

                    if(isNaN(valorProduto) || valorProduto ===''){
                        console.log(`ERRO: O valor ${valorProduto} digitado não é válido! Por favor utilize apenas números`)
                        entradaDeDados.question(`Qual o valor do ${nomeProduto}: R$`, perguntarValor)

                    }else{
                        entradaDeDados.question('Digite a taxa de juros que deverá ser aplicada: ', function perguntarTaxa(taxa){

                            let taxaDigitada = taxa
                            
                            let taxaConvertida = Number(taxaDigitada) / 100

                            if(isNaN(taxaDigitada) || taxaDigitada ===''){
                                console.log(`ERRO: O valor ${taxaDigitada} digitado não é válido! Por favor utilize apenas números`)
                                entradaDeDados.question('Digite a taxa de juros que deverá ser aplicada: ', perguntarTaxa)

                            }else{
                                entradaDeDados.question('Em quanto tempo deseja pagar? Digite 1 para meses ou 2 para anos: ', function perguntarTempo(escolha){

                                    let escolhaDigitada = escolha

                                    let montante

                                    let quantidadeParcelas

                                    let acrescimo

                                    if(isNaN(escolhaDigitada) || escolhaDigitada ==='' || escolhaDigitada < 1 || escolhaDigitada > 2){
                                        console.log(`ERRO: ${escolhaDigitada} não é válido! Por favor utilize apenas números`)
                                        entradaDeDados.question('Em quanto tempo deseja pagar? Digite 1 para meses ou 2 para anos: ', perguntarTempo)

                                    }else if(escolhaDigitada == 1){
                                        entradaDeDados.question('Em quantos mêses você deseja parcelar: ', function perguntarEmMes(escolhaMes){

                                            let parcelarEmMes = escolhaMes

                                            quantidadeParcelas = Number(parcelarEmMes)

                                            montante = Number(valorProduto) * (1 + Number(taxaConvertida)) ** Number(parcelarEmMes)

                                            acrescimo = Number(montante) - Number(valorProduto)

                                            if (isNaN(parcelarEmMes)){
                                                console.log(`ERRO: Valor ${parcelarEmMes} não é reconhecido!`)
                                                entradaDeDados.question('Em quantos mêses você deseja parcelar: ', perguntarEmMes)

                                            }else{
                                                console.log(`\n******************* Essencial Alpha *******************
                                                    \nMuito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.
                                                    \nA compra do produto ${nomeProduto}, tem um valor de: R$${valorProduto}.
                                                    \nA sua compra será parcelada em ${quantidadeParcelas} vezes e o Sr(a) pagará um total de: ${montante.toFixed(2)}.
                                                    \nO acréscimo realizado ao valor de: R$${valorProduto} será de R$${acrescimo.toFixed(2)}.
                                                    \n
                                                    \n    Muito obrigado por escolher a Essencial Alpha.
                                                    \n*******************************************************`)
                                            }//Fecha condição de meses
                                        })//Fecha quantidade de parcelas em meses

                                    }else if(escolhaDigitada == 2){
                                        entradaDeDados.question('Em quantos anos você deseja parcelar: ', function perguntarEmAno(escolhaAno){

                                            let parcelarEmAnos = escolhaAno

                                            let mesesConvertidos = Number(parcelarEmAnos) * 12

                                            quantidadeParcelas = Number(mesesConvertidos)

                                            let montante = Number(valorProduto) * (1 + Number(taxaConvertida)) ** Number(mesesConvertidos)

                                            acrescimo = Number(montante) - Number(valorProduto)

                                            if (isNaN(parcelarEmAnos)){
                                                console.log(`ERRO: Valor ${parcelarEmAnos} não é reconhecido!`)
                                                entradaDeDados.question('Em quantos anos você deseja parcelar: ', perguntarEmAno)

                                            }else{
                                                console.log(`\n******************* Essencial Alpha *******************
                                                    \nMuito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.
                                                    \nA compra do produto ${nomeProduto}, tem um valor de: R$${valorProduto}.
                                                    \nA sua compra será parcelada em ${quantidadeParcelas} vezes e o Sr(a) pagará um total de: ${montante.toFixed(2)}.
                                                    \nO acréscimo realizado ao valor de: R$${valorProduto} será de R$${acrescimo.toFixed(2)}.
                                                    \n
                                                    \n    Muito obrigado por escolher a Essencial Alpha.
                                                    \n*******************************************************`)
                                            }//Fecha condição de anos
                                        })//Fecha quantidade de parcelas em anos
                                    }//Fecha o else da escolha em anos
                                })//Fecha a escolha se será em mês ou ano
                            }//Fecha a validação da taxa
                        })//Fecha o valor digitado da taxa
                    }//Fecha validaçõa do produto
                 })//Fecha o valor do produto
            }//Fecha validação do nome do produto
        })//Fecho o nome do produto
    }//Fecha validação do nome do cliente
})//Fecho o nome do cliente