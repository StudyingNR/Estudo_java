const pai = { name: 'Marcos', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.name = 'Anna'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    name: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.name)
filha2.name = 'Melth'
console.log(`${filha2.name} tem cabelos ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha1))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança ${key}`)
}