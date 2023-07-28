function acharMenorValue(number) {
    const smallerValue = number[0]

    for(let i in number)
        if(number[i] < smallerValue)
            smallerValue = number[i]
    
    return smallerValue
}

console.log(acharMenorValue([1, 3, 4, 5, 6, 7 ]))

// Resolução two

function smallerNumber(number) {
    return number.reduce((previous, current) => previous < current ? previous : current )
}

console.log(smallerNumber([1, 3, 4, 5, 6, 7 ]))


// Resolution three
function menorNumero(numbers) {
    return Math.min(...numbers);
}

console.log(menorNumero([1, 3, 4, 5, 6, 7 ]))

