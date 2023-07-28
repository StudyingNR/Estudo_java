function calcularMediaSimples(number) {
    let quantidadeDeNumber = number.length
    let somaTotal = 0
    
    for(numeros of number) {
        somaTotal += numeros
    }
    return somaTotal / quantidadeDeNumber
}

console.log(calcularMediaSimples([0, 10]))
console.log(calcularMediaSimples([1, 2, 3, 4, 5]))


// Resolução two
 
function calcularMediaSimples(numbers) {

    const quantidadeDeNumber = numbers.length

    const sumaTotal = numbers.reduce((numberA, numberB) => numberA + numberB)

    return sumaTotal / quantidadeDeNumber
}

console.log(calcularMediaSimples([0, 10]))
console.log(calcularMediaSimples([1, 2, 3, 4, 5]))