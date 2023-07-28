function receberPrimeiroEUltimoElemento(elemento){
    const indicePrimeiroElemento = 0
    const indiceUltimoElemento = elemento.length-1
    const primeiroElemento = elemento[indicePrimeiroElemento]
    const ultimoElemento = elemento[indiceUltimoElemento]
    
    return [primeiroElemento, ultimoElemento]
}


console.log(receberPrimeiroEUltimoElemento([76000, 200, 20000]))


// Resolução two

function primeiroEUltimoElemento(element) {
    const primeiroElent = element.shift()
    const ultimoElement = element.pop()

    return [primeiroElent,ultimoElement]
}

console.log(receberPrimeiroEUltimoElemento([76000, 200, 20000]))
