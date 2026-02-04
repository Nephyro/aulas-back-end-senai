//Importar biblioteca
const readline = require(`readline`)

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Por favor digite o seu nome: ', function(nome){
    let nomeCliente = nome

    entradaDeDados.question(`Olá ${nomeCliente}, qual produto deseja comprar: `, function(produto){
        let nomeProduto = produto

        entradaDeDados.question(`Qual o valor do ${nomeProduto}: \n`, function(valor){
            let valorProduto = valor

            entradaDeDados.question('Digite a taxa de juros que deverá ser aplicada: ', function(taxa){
                let taxaAplicada = taxa
                
            })

            console.log(`\n******************* [Nome da Empresa] *******************
                \nMuito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.
                \nA compra do produto ${nomeProduto}, tem um valor de: ${valorProduto}.
                \nA sua compra será parcelada em xx vezes e o Sr(a) pagará: xxxxxx.
                \nO acréscimo realizado ao valor de: ${valorProduto} será de xxxxxxxxxx.
                \n
                \nMuito obrigado por escolher a [Nome da Empresa].
                \n*******************************************************`)
        })
    })
})

