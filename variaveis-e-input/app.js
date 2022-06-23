const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let leituraDeCampo;

readline.question('infome sua idade: ', input => {
    leituraDeCampo = input;
    console.log(`O Usuario digitou: ${leituraDeCampo}`);
});
