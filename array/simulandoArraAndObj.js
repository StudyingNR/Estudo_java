const quaseArray = { 0: 'Rafa', 1: 'Anna', 2:'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() {
        return Object.values(this)
    },
    enumerable: false
})

console.log(quaseArray[0])

const myArray = ['Fava', 'Anna', 'Maria']
console.log(quaseArray.toString(), myArray)