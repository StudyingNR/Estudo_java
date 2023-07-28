function mutiplicador(number1, number2) {
    let result = 0

    /*A otimização feita para diminuira quantidade de chamadas recursivas pode ser realizada here to diminuira quantidade de loops*/
    for(let i = 0; i < number2; i++)
    result += number1
    return result
}

console.log(mutiplicador(5, 5))
console.log(mutiplicador(0, 7))


// Resolução two

function multiplicar(number, mutiplicador) {
    if(number === 0 || mutiplicador === 0) return 0
    return mutiplicador === 1 ? number : number + multiplicar(number, mutiplicador -1)
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))
