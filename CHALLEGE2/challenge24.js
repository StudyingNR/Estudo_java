const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length


function receberMelhorEstudate(studings) {
    const estudantesComMedias = Object.entries(studings).map(studing => {
        const chave = 0,
              value = 1

    
        return { name: studing[chave], media: media(studing[value])}

    })
    const studingOrdenado = estudantesComMedias.sort( (studingA, studingB) => studingB.media - studingA.media)
    const melhorStuding = studingOrdenado[0]
    

    return melhorStuding
}


console.log(receberMelhorEstudate({
    Joao: [8, 7.6, 8.9, 6],
    Maria: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}))