function filtrarPorQuantidadeDeDigitos(number, quantidadeDesejada) {
    let result = []

    for (number of number) {
        const quantidadeDeDigitos = String(number).length

        if (quantidadeDeDigitos === quantidadeDesejada)
            result.push(number)
    }

    return result
}


console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))

 
// Resolução two

function filtrarPorQuantidadeDeDigitos(number, quantidadeDesejada) {
    return number.filter(number => {
        const quantidadeDeDigitos = String(number).length

        return quantidadeDeDigitos === quantidadeDesejada
    })
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))
