// pessoa -> 123 {..}
const person = {name: 'Anna'}
person.name = 'Maria'
console.log(person)

//person -> 456 -> {...}
//person = {name: 'Anna'}

Object.freeze(person)

person.name = 'Polo'
person.end = "Rua ABC"
delete person.name

console.log(person.name)
console.log(person)