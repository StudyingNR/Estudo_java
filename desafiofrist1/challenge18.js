function numberWords(number) {
    switch (number) {
        case 0:
            return 'Zero'
        break
        case 1:
            return 'One'
        break
        case 2:
            return 'Two'
        break
        case 3:
            return 'Three'
        break
        case 4:
            return 'Four'
        break
        case 5:
            return 'Five'
        break
        case 6:
            return 'Six'
        break
        case 7:
            return 'Seven'
        break
        case 8:
            return 'Eight'
        break
        case 9:
            return 'Nine'
        break
        case 10:
            return 'Ten'
        break
        default:
            return 'number is out of range' //numero fora do intervalo.
    }
}

console.log(numberWords(0))
console.log(numberWords(1))
console.log(numberWords(2))
console.log(numberWords(3))
console.log(numberWords(4))
console.log(numberWords(5))
console.log(numberWords(6))
console.log(numberWords(7))
console.log(numberWords(8))
console.log(numberWords(9))
console.log(numberWords(10))
console.log(numberWords(11))