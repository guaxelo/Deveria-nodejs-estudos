const listaArgumentos = process.argv.slice(2);

console.log('------------------------- EXECUTANDO UM FOR -----------------------------')
for(let controladorFor = 0; controladorFor < listaArgumentos.length; controladorFor++){
    console.log(`Posição ${controladorFor} valor lido = ${listaArgumentos[controladorFor]}`)
}

console.log('------------------------- EXECUTANDO UM WHILE -----------------------------')
let controladorWhile = 0
while(controladorWhile < listaArgumentos.length){
    console.log(`posição ${controladorWhile} valor lido = ${controladorWhile}`)
    controladorWhile++
}   

console.log('------------------------- EXECUTANDO UM DO WHILE -----------------------------')
let controladorDoWhile = 0
do{
    console.log(`Posição ${controladorDoWhile} valor lido = ${listaArgumentos[controladorDoWhile]}`)
    controladorDoWhile++
}while(controladorDoWhile < listaArgumentos.length)

console.log('------------------------- EXECUTANDO UM FOR OF -----------------------------')
let controladorForOf = 0
for(const argumento of listaArgumentos){
    console.log(`posição ${controladorForOf} valor lido = ${argumento}`)
    controladorForOf++
}