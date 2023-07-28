function funcaoDaSorte (numberScolhido) {
    const min = 1
    const max = 10
    const numberAleatorio = Math.floor(Math.random() * (max - min + 1) + min)

    return (numberScolhido === numberAleatorio ? 
        `Parabéns! o número sorteado foi ${numberAleatorio}` :
        `Que pena, o número sorteado foi o ${numberAleatorio}`
    )
}

console.log(funcaoDaSorte(6))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(3))