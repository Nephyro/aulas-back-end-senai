//Import da bivlioteca
var readline = require(`readline`)

//Criação do objeto para manipular a entrada de dados
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//Entrada de dados do nome
entradaDeDados.question('Favor digitar o seu nome: ', function(nomeUsuario){
    //Entrada de dados do valor1
    entradaDeDados.question('Insira o valor 1 [1/3]: ', function(n1){
        //Entrada de dados do valor2
        entradaDeDados.question('Insira o valor 2 [2/3]: ', function(n2){
            //Entrada de dados do valor3
            entradaDeDados.question('Insira o valor 3 [3/3]: ', function(n3){
                //Soma dos 3 valores. A classe Number converte uma
                    // String para Número
                var soma = Number(n1) + Number(n2) + Number(n3)

                console.log('Nome do usuário: ' + nomeUsuario)
                console.log(`A soma dos valores é: ${soma}`)
            })//Fecha valor 3
        })//Fecha valor 2
    })//Fecha valor 1
})//Fecha o nome