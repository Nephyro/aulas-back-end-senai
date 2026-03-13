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

    //Splice() -> Permite remover um elemento baseado no indice da lista
                    //  splice(indice, qtde de elementos)
    listaDeFornecedores.splice(2,2)     // O primeiro número representa o indice e o segundo representa a qtde de indices a ser removidos a partir do indice indicado
    console.table(listaDeFornecedores)

    //Splice() -> Permite adicionar um novo elemento em um determinado lugar do array (indice)
                            //Indice, 0 -> significa que não será removido  ninguém, Novo conteúdo  
    listaDeFornecedores.splice(2,0,'Carlos da Silva')
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

const criandoDadosJSON = function(){
    let aluno = {   "nome": "José", 
                    "ra": 123456, 
                    "telefone": "97655432", 
                    "email": "jose@gmail.com"
                }

    //  Exibindo o objeto JSON completo
    console.log(aluno)
    console.table(aluno)

    // Exibindo apenas um atributo do JSON
    console.log(aluno.nome)
    console.log(aluno.email)

    // Adiciona um novo atributo no JSON
    aluno.sexo = 'Masculino'
    console.log(aluno)

    // Remove um atributo do JSON
    delete aluno.telefone
    console.log(aluno)

            
}

const cadastroDeProdutos = function(){
    let cores = [
        {"id": 1, "cor": "Branco"},    //Indice 0
        {"id": 2, "cor": "Preto"},     //Indice 1
        {"id": 3, "cor": "Azul"},      //Indice 2
        {"id": 4, "cor": "Rosa"},      //Indice 3
        {"id": 5, "cor": "Cinza"}      //Indice 4
    ]

    let marcas = [
        {"id": 1, "marca": "LG",            "telefone": "10193464", "email": "lg@gmail.com"},
        {"id": 2, "marca": "Dell",          "telefone": "92476132", "email": "dell@gmail.com"},
        {"id": 3, "marca": "Lenovo",        "telefone": "10835645", "email": "lenovo@gmail.com"},
        {"id": 4, "marca": "Apple",         "telefone": "92402614", "email": "apple@gmail.com"},
        {"id": 5, "marca": "Rayzer",        "telefone": "03914643", "email": "rayzer@gmail.com"},
        {"id": 5, "marca": "Logitech",      "telefone": "10235834", "email": "log@gmail.com"},
        {"id": 6, "marca": "Multilaser",    "telefone": "18371547", "email": "multilaser@gmail.com"},
    ]

    let produtos = [
        {   "id": 1, 
            "nome": "Monitor", 
            "descricao": "27 polegadas",
            "marca": [
                        marcas[1].marca
                    ],
            "qtde": 20,
            "cor": [
                cores[4],
                cores[1]
            ],
            "valor": 800.50
        },
        {   "id": 2,
            "nome": "Teclado",
            "descricao": "Teclado mecânico RGB",
            "marca": [
                        marcas[5].marca
                    ],
            "qtde": 200,
            "cor": cores,
            "valor": 150
        },
        {   "id": 3,
            "nome": "Mouse",
            "descricao": "Mouse sem fio",
            "marca": [
                        marcas[0].marca,
                        marcas[1].marca,
                        marcas[5].marca
                     ],
            "qtde": 500,
            "cor": [
                cores[0],
                cores[1],
                cores[4]
                   ],
            "valor": 80
        },
    ]

    // console.log(cores)
    // console.table(cores)

    // console.log(cores[2].cor)

    // console.log(produtos)
    // console.log(produtos[0].cor)
    // console.log(produtos[0].cor[1].cor)

    // console.table(produtos)

    // produtos[0].cor.forEach(function(nomeCor){
    //     console.log('A cor do produto é:' + nomeCor.cor)
    // })

    produtos[0].marca.forEach(function(nomeProduto){
        console.log('Nome: ' + nomeProduto.marcas)
    })

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

// console.log(quantidadeDeItens('josé'))

// criandoDadosJSON()

cadastroDeProdutos()