function filterNumber(array) {
    const result = []
    for(let item of array)
    if(typeof item === 'number')
    result.push(item)
    return result
}

const arrays = ['JavaScript', 1, 6, 'casa', 'riqueza', 'profição', "Engenharia de Software", 'salario', '$200.000K', 'Negocio', 'Ação']

console.log(filterNumber(arrays))

// Resultado two

function filterNumero(array) {
    return array.filter(item => typeof item === 'number')
}