const evoque = {
    modelo: 'Evoque vela',
    velMax: 370
}

const polo = {
    modelo: 'Highline 200 TSI',
    velMax: 207 
}

console.log(evoque.modelo.__proto__)
console.log(evoque.__proto__ == Object.prototype)
console.log(polo.__proto__)
console.log(Object.prototype.__proto__ == null);


function MeObject () {}
console.log(typeof Object, typeof MeObject)
console.log(Object.prototype, MeObject.prototype)
