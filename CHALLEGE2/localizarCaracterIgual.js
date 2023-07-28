function contarCaracter(caractereBuscado, frase) {
    let contador = 0

    for (let i = 0; i < frase.length; i++)
        if (frase.charAt(i) === caractereBuscado)
            contador++
    
    return contador
}

console.log(contarCaracter("r", "A sorte favorece os audazes"))

// Resolução two

function contarCaracters(caracterBuscado, frase) {
    return [...frase].filter(caractere => caractere === caracterBuscado).length
}

console.log(contarCaracter("r", "Adriano e r... e prospero"))
