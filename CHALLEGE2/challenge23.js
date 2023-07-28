function segundoMaior(numbers) {
    let indiceDoMaior = 0
    let segundoMaior

    numbers.forEach( (number, indice ) => {
        if ( number > numbers[indiceDoMaior] )
            indiceDoMaior = indice
    })

    numbers.splice(indiceDoMaior, 1) 
    segundoMaior = [0]

    numbers.forEach( number => {
        if(number > segundoMaior)
            segundoMaior = number
    })

    return segundoMaior
}


console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))



// resolução two

function segundoMaior(numbers) {
    const maiorNumber = Math.max(...numbers)
    numbers = numbers.filter(number => number != maiorNumber)
    const segundoMaior = Math.max(...numbers)

    return segundoMaior
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))


// Resolução three 

function segundoMaiors(numbers) {
    const numbersOrdenados = numbers.sort( (numberA, numberB) => numberB - numberA )
    const segundoMaior = numbersOrdenados[1]

    return segundoMaior
}


console.log(segundoMaiors([12, 16, 1, 5]))
console.log(segundoMaiors([8, 4, 5, 6]))