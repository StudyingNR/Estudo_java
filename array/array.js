console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Anna')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Anna']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Adan'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafa'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Anna']
aprovados.splice(1,1, 'Adan', 'Rafa')
console.log(aprovados)