//Comentário em linha
/*
Comentário
    em
  bloco
*/

//Imprime o terminal um conteúdo
console.log('Testando o print do console')

//Permite criar uma variavel
var nome = 'Anderson'

console.log(nome)

//Formas de concatenar variáveis e texto
console.log('o nome do usuário é: ' + nome)
console.log(`O nome do usuário é: ${nome}`) //método de concatenação alternativa

//Import da biblioteca para captar entrada de dados via terminal
var readline = require('readline')

//Cria uma interface para entrada e saída de dados pelo terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Função para retornar o nome digitado no terminal
    //O método question após a digitação chama a função "CALL BACK"
    //para entregar o que foi digitado no terminal, através do argumento
    //nomeUsuario
entradaDeDados.question('Favor digitar o seu nome:', function(nomeUsuario){
    //Entrada de dados para o Email
    entradaDeDados.question('Favor digitar o seu email:', function(emailUsuario){
        console.log('O nome do usuário é: ' + nomeUsuario)
        console.log(`O email informado é: ${emailUsuario}`)
    })
})