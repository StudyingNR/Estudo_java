function objToArray(obj) {
    const result = []
    for (let chave in obj)
        result.push([chave, obj[chave]])
    
    return result
}

console.log(objToArray({
    name: 'Adriano',
    proficao: "Engenheiro de software"
}))


// Resolução two
function objectToArray(object) {
    const chaves = Object.keys(object)
    const result = chaves.map( chave => [chave, object[chave]])

    return result
}

console.log(objectToArray({
    name: 'Adriano',
    proficao: "Engenheiro de software"
}))


// Resolução three

function objetoParaArray(objeto) {
    return Object.entries(objeto)
}

console.log(objetoParaArray({
    name: 'Adriano',
    proficao: "Engenheiro de software"
}))

