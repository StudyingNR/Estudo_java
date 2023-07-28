//Object.previntEtensions
const produto = Object.preventExtensions({
    name: 'Qualquer',  preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.name = 'Borracha'
produto.descricao = "Borracha escolar white"
console.log(produto)

//
const person = { name: 'Juliana', age: 35}
Object.seal(person)
console.log('Selado:', Object.isSealed(person))

person.fullName = 'Silvia'
delete person.name
person.age = 29
console.log(person)