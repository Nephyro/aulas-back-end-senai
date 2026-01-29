var readline = require(`readline`)

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Favor digitar o seu nome:', function(nomeUsuario){
    entradaDeDados.question('Insira qualquer número [1/3]:', function(n1){
        entradaDeDados.question('Insira o segundo número [2/3]:', function(n2){
            entradaDeDados.question('Insira o terceiro número [3/3]:', function(n3){
                
                var soma = Number(n1) + Number(n2) + Number(n3)

                console.log('O nome do usuário é: ' + nomeUsuario)
                console.log(`A soma dos números é igual a: ${soma}`)
            })
        })
    })
})