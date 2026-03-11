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
const listaDeNomes      = [ 'José', 
                            'Maria', 
                            'João', 
                            'André', 
                            'Alex', 
                            'Carlos', 
                            'Ana',
                            'Bruna', 
                            'Jake',
                            'José',
                            'José da Silva'
                        ]
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

    // Permite adicionar novos valores no array, sempre no FINAL da lista
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push('Luizinho da Silva', 'André da Silva', 'Carlos da Silva')
    
    console.table(listaDeFornecedores)

    // Permite adicionar novos elementos no array sempre no INICIO da lista
    listaDeFornecedores.unshift('A Ana Carolina')
    console.table(listaDeFornecedores)

    // Permite remover elementos do FINAL da lista
    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)

    // Permite remover elementos do INICIO da lista
    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)

    // Permite remover um elemento baseado no indice da lista
                    //  splice(indice, qtde de elementos)
    listaDeFornecedores.splice(2,2)     // O primeiro número representa o indice e o segundo representa a qtde de indices a ser removidos a partir do indice indicado
    console.table(listaDeFornecedores)
}

const removerItem = function(nome){
    
    // Retorna o indice de um elemento fazendo a busca pelo valor
    // Se o indesof não encontrar o conteúdo ele devolve -1
    let indice = listaDeNomes.indexOf(nome)
    if(indice != -1){
        listaDeNomes.splice(indice, 1)
        return true
    }else{
        return false
    }
    // for(indice in listaDeNomes){
    //     if(listaDeNomes[indice] == nome){
    //         listaDeNomes.splice(indice,1)
    //     }
    // }
}

const verificarItem = function(nome){
    // Verifica a existencia de um conteúdo dentro de uma lista (true/false)
    return listaDeNomes.includes(nome)
}

const quantidadeDeItens = function(nome){
    let cont = 0
    listaDeNomes.forEach(function(item){
        if(String(item).toUpperCase() == String(nome).toUpperCase())
            cont +=1
    })

    return cont
}


// exibirDados()
// manipularDados()
// console.table(listaDeNomes)
// let resposta = removerItem('Maraia')
// if(resposta){
//     console.log('Item removido com sucesso.')
// }else{
//     console.log('Não foram encontrados itens para ser removido.')
// }

// console.table(listaDeNomes)

// console.log(verificarItem('Maria'))

console.log(quantidadeDeItens('josé'))