const notas = [8.7, 6.4, 9.2, 10.4, 7.9]

for (let i  in notas) {
    console.log(i, notas[i])
}

const pessoas = {
    nome: 'Anna',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoas) {
    console.log(`${atributo} = ${pessoas[atributo]}`)
}