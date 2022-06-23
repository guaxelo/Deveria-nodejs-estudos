const { Console } = require('console');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log('esse programa vai checar se voce é maior de 18 anos e tem habilitação pra saber se voce pode entrar no kart')
console.log('alem de suas verificacoes, precisamos verificar se voce esta na lista de presenca do horario')
readline.question('qual o ano do seu nascimento?', ano =>{
    if(ano > 2004){
        console.log('voce nao tem mais de 18 anos');
    }
    else{
        readline.question('voce tem habilitação? (sim/nao)', temHabilitacao =>{
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                Console.log('voce nao tem habilitação pra entrar no kart');
            }
            else{
                readline.question("Qual seu nome?", nome =>{
                    switch(nome){
                        case 'Douglas':
                            console.log(`Bem vindo ao Kart ${nome}`)
                        case 'Douglas':
                            console.log(`Bem vindo ao Kart ${nome}`)
                        default:
                            console.log('nome nao identificado na lista de presença')
                    }
                })      
            }
        })
    }   
})
