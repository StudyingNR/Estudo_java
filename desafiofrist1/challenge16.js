function calculadora(x, operador, y) {
    switch(operador) {
        case '+':
            return x + y
        break
        case '-':
            return x - y
        break
        case '*':
            return x * y
        break
        case '/':
            return x / y
        break
        default:
            return console.log(`Operação invalida`)
    }
}

console.log(calculadora(5, '+', 5))
console.log(calculadora(5, '-', 5))
console.log(calculadora(5, '*', 5))
console.log(calculadora(5, '/', 5))
console.log(calculadora(5, 'w', 5))
console.log(calculadora(4, '%', 3))