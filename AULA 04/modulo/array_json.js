/***************************************************************** 
 * Objetivo: Manipular dados utilizando Array e JSON
 * Data: 05/03/2026
 * Autor: Anderson Ribeiro
 * Versâo: 1.0
***************************************************************** */

/*
    [ ] -> representa um objeto do tipo ARRAY
    { } -> representa um objeto do tipo JSON

    Array -> É um objeto na memória que permite trabalhar 
             com vários valores em um único objetos

        let nome    = 'José'
        let nome2   = 'Maria'
        let nome3   = 'João'
                indice    0      1       2
        let nome    = ['José' 'Maria' 'João']

        JSON -> É um objeto na memória que permite trabalhar com CHAVE e VALOR

            let nome        = 'José'
            let telefone    = '122318829'
            let email       = 'jose@gmail.com'

            let cliente = { "nome": "José", 
                            "telefone": "122318829",
                            "email": "jose@gmail.com"
                         }

*/

// Formas de criar um ARRAY
const listaDeNomes      = ['José', 'Maria', 'João', 'André', 'Alex']
const listaDeClientes   = []
const listaDeFornecedores = []

const exibirDados = function(){
    // Exibe o objeto array e seu conteúdo
    console.log(listaDeNomes)

    // Exibe o objeto array em formato de tabela com seus indices
    console.table(listaDeNomes)

    // Exibe apenas o valor do respectivo indice do array
    console.log(listaDeNomes[1])

    // Retorna o tipo de dados de um indice do array
    console.log(typeof(listaDeNomes[4]))

    console.log(`O nome do cliente é: ${listaDeNomes[0]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[1]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[2]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[3]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[4]}`)

    // Estruturas de repetição
    // While
    console.log('\n********** WHILE *********')
    let cont = 0
    while(cont < listaDeNomes.length){
        console.log(`O nome do cliente é: ${listaDeNomes[cont]}`)
        cont+=1
    }

    console.log('\n********** FOR *********')
    for(let contador = 0; contador < listaDeNomes.length; contador++){
        console.log(`O nome do cliente é: ${listaDeNomes[contador]}`)
    }

    // Retorna o conteúdo de cada elemento através de um CAL BACK
    console.log('\n********** FOR EACH *********')
    listaDeNomes.forEach(function(cliente){
        console.log(`O nome do cliente é: ${cliente}`)
    })

    // Retorna o idice do elemento, e será preciso colocar dentro do objeto array
    // Ex: listaDeNomes[item]
    // Praticamente igual ao FOR e WHILE
    console.log('\n********** FOR IN *********')
    for(item in listaDeNomes){
        console.log(`O nome do cliente é: ${listaDeNomes[item]}`)
    }

    // Percorre o array e retorna somente o conteúdo de cada indice,
    // sendo muito parecido com o ForEach
    console.log('\n********** FOR OF *********')
    for(cliente of listaDeNomes){
        console.log(`O nome do cliente é: ${cliente}`)
    }

    console.log(listaDeNomes.length)
}

const manipularDados = function(){
    // Adicionando valores novos no array através de indices
    listaDeClientes[0] = 'José da Silva'
    listaDeClientes[1] = 'Maria da Silva'
    listaDeClientes[2] = 'João da Silva'
    listaDeClientes[4] = 'Alex da Silva'

    console.log(listaDeClientes)

    // Permite adicionar novos valores no array, sempre no final da lista
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push('Luizinho da Silva', 'André da Silva', 'Carlos da Silva')

    console.log(listaDeFornecedores)
}

// exibirDados()
manipularDados()