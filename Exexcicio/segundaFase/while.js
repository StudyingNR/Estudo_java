function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} //Essa function vai retornar valores no intervalo determinado.

let opcao = 0
while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 100)
    console.log(`Opçao escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')



