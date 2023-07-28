const person = {
    name: 'Adriano',
    age: 22,
    weigth: 90
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

Object.entries(person).forEach(([chave, value]) => {
    console.log(`${chave}: ${value}`)
})

Object.defineProperty(person, 'RendaMonth', {
    enumerable: true,
    writable: false,
    value: 'US$ 50k'
})

console.log(person)

//Object.freez(person) congela os elemento de modo que eles não possa ser alterados ne deletado usando o metodo delet


//Object.assign (ECMAScript2025)

const dest = {a: 4}
const o1 = {b: 2}
const o2 = {c: 5, a: 3}
const obj = Object.assign(dest, o1, o2)

console.log(obj)