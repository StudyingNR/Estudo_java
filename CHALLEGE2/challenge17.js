function sumaNumber(number) {
    const quantidaDeDeNumber = number.length
    
    return (quantidaDeDeNumber === 0) ? 0 : number[0] + sumaNumber(number.slice(1))
}
console.log(sumaNumber([10, 10, 10]))


// Resolção two
function somaNumeros(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)
    return soma
}

console.log(somaNumeros([10, 10, 10]))

// Resolução three

function somarNumeros(numeros) {
    const soma = numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0 )
    return soma
}

console.log(somarNumeros([ 10, 10, 10]))


