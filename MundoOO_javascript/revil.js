// coleção dinâmica de pares chaves/valor
const produto = new Object
produto.nome = 'car Polo'
produto['Modelo'] = '200 TSI highline 2022'
produto.price = 'R$8000'
produto.proprietario = 'Adriano'

console.log(produto)
delete produto.price
console.log(produto)


const car = {
    modelo: 'Polo Hilinghline',
    value: 80000,
    proprietario: {
        name: 'Adrino',
        age:23,
        anddress: {
            logradouro: 'r. Imperador...',
            number: 190
        }
    },
    condutor:[{
        name: 'Adriano',
        age: 22,    
    }, {
        name: 'Girlfriend',
        age: 22
    }],
    calculateIsurece: function() {
        //...
    }
}
//access attributes through dot annotation.
car.proprietario.anddress.number = 1000
car['proprietario']['anddress']['logradouro']
console.log(car)

//delete car.condutor
delete car.calculateIsurece
console.log(car)
console.log(car.calculateIsurece)
console.log(car.condutor.length)
//cuidado ao acessar elemetos deletados de um objct poi pode gerar erro no seu programa