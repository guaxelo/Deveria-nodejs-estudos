const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const validarNumeroInformado = (numero) => {
        const resultado = Number.parseFloat(numero)
        if(!resultado){
            console.log("numero informado é invalido")
        }
        return resultado
}

const validarOperador = (operador) =>{
    switch(operador){
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador
        default:
            console.log('operador informado é invalido')
            return null
    }
}

readline.question('Favor informar um numero: ', (numero1) =>{

    const numeroValidado1 = validarNumeroInformado(numero1);

    if(numeroValidado1){
        readline.question('Favor informar outro numero: ', (numero2) =>{
            const numeroValidado2 = validarNumeroInformado(numero2)
            
            if(numeroValidado2){
                readline.question('Favor informar o operador: ', (operador) =>{
                    const operadorValidado = validarOperador(operador)
                    if(operadorValidado){
                        switch(operadorValidado){
                            case '+': console.log(`Operador selecionado Adição = ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`)
                                break
                            case '-': console.log(`Operador selecionado subtração = ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`)
                                break
                            case '*': console.log(`Operador selecionado multiplicação = ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`)
                                break
                            case '/': console.log(`Operador selecionado divisão = ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`)
                                break
                            case '%': console.log(`Operador selecionado modulo = ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`)
                        }
                    }

                })
            }
        })
    }
})
    
