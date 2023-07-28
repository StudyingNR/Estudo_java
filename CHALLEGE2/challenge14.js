function receberSoParDeIndicePar(numbers) {
    let result = []
    for(let i = 0; i < numbers.length; i+= 2){
    const numberPair = numbers[i] % 2 === 0

    if(numberPair)
        result.push(numbers[i])    
    }
    return result
}

console.log(receberSoParDeIndicePar([1, 2, 3, 5,  ]))
console.log(receberSoParDeIndicePar([10, 70, 22, 43]))

function receberSoPairDeIndicePair(number) {
    return number.filter((number, indice) => {
        const numberPair = number  % 2 === 0
        const indicePair = indice % 2 === 0

        return numberPair && indicePair
    })

    
}

console.log(receberSoPairDeIndicePair([1, 2, 3, 5,  ]))
console.log(receberSoPairDeIndicePair([10, 70, 22, 43]))