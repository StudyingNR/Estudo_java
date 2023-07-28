function removerVogal(frase) {
    const vogais = ["a", "A", "E", "e", "i", "I", "o", "O", "u", "U"]

    vogais.forEach(vogal => frase = frase.replace(vogal, ''))

    return frase
}

console.log(removerVogal('case'))


// Resolução two

function removerVogais(frase) {
    return frase.replace(/[aeiou]/ig, 'riquesa')
}

console.log(removerVogais('casa'))