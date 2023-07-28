let arrayInt = [1, 20000, 3, 4, 5, 6, 7, 8, 9, 76000]
let arrayString = ['Travel', "car Polo highline 200 TSI", 'House', 'Wealth', 'Bi-lingua']
let arrayDouble = [1.2, 20.000, 3.6, 4.9, 1.9]

function concatenate(...args) {
    let result = []
    for(let i = 0; i < arguments.length; i++) {
        result = result.concat(arguments[i])
    }
    return result
}

console.log(concatenate(arrayInt, arrayString))
console.log(concatenate(arrayDouble, arrayString))