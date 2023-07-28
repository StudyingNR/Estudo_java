function getInteiroAleatorioEntre (max, min){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao // No do While não prescisa adiciona valor para a variavel opcao

//do {
    getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while(opcao != -1)

console.log('Até a próxima')
