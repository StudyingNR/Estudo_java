function itsBetween(min, max, number, between = false) {
    if(between) return number >= min && number <=max
    return number > min && number < max 
}

console.log(itsBetween(10, 100, 50))
console.log(itsBetween(16, 100, 160))
console.log(itsBetween(3, 150, 3))
console.log(itsBetween(3, 150, 3, true))

// Forma two

function estaEntre(min, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= min && numero <=maximo : numero > min && numero < maximo
}
console.log(estaEntre(10, 100, 50))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 150, 3))
console.log(estaEntre(3, 150, 3, true))