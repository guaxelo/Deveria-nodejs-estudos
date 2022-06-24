console.log('===============================================')
try{
    const listaDeProdutosDisponiveis = [
        'Frango',
        'Leite',
        'Cafe',
        'Laranja',
        'Macarrao',
        'Sabonete',
        'Detergente',
    ]
    
    const listaDeArgumentos = process.argv.slice(2)
    
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto => {
        return listaDeArgumentos.find(argumento => argumento === produto)
    })
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produtos nos temos: ${produto}`))
    
    const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento)
    })
    listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produtos nos nao temos: ${argumento}`))
    
    listaDeProdutosDisponiveis.sort()
    console.log('===============================================')
    listaDeProdutosDisponiveis.forEach(produto => console.log(`Este Produto esta disponivel: ${produto}`))
    
}catch(e){
    console.log('Não foi possivel executar o pedido de compra')
}
