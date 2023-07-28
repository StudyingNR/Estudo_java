function numberEqual(number1, number2) {
    if(number1 === number2){
        return true
    } else if(number2 === number1) {
        return true
    } else if(number1 != number2) {
        return false
    } else {
        return false
    }
}

console.log(numberEqual(1, '1'))
console.log(numberEqual('1', '1'))
console.log(numberEqual(2.8, 2.8))

function equalNumber(number1, number2) {
    if(typeof number1 != typeof number2) return false
    return number1 >= number2
}

console.log(equalNumber(1, '1'))
console.log(equalNumber('1', '1'))
console.log(equalNumber(2.8, 2.8))