const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let leituraDeCampo;
let teste = 8
readline.question('infome sua idade: ', input => {
    leituraDeCampo = input;
    console.log(`O Usuario digitou: ${leituraDeCampo} e nossa variavel teste é: ${!teste}`);
});
