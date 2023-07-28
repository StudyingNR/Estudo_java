// usando a notação literal
const obj1 = {}
console.log(obj1)

// Objct em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Function construtora
function Product(name, price, desc) {
    this.name = name // this transforma o parametro que foi acossiado a ele em publico pemitindo a auteração do mesmo
    this.getPriceWithDiscont = () => {
        return price * (1 - desc)
    }
}
const p1 = new Product('Table', 250, 0.12)
const p2 = new Product('Chair', 500, 0.20)

console.log(p1.getPriceWithDiscont(), p2.getPriceWithDiscont())

// Function fectory
function createEmployee (name, baseSarary, lacks) {
    return {
        name, 
        baseSarary, 
        lacks,
        getSarary () {
            return (baseSarary / 30) * (30 - lacks)
        }
    }
}

const f1 = createEmployee('Maico', 7980, 4)
const f2 = createEmployee('Maria', 11400,1)

console.log(f1.getSarary(), f2.getSarary())

//objct.create
const filha = Object.create(null)
filha.name = 'Anna'
console.log(filha)

// Um função famosa que retora Object..
const fromJSON = JSON.parse('{"Info": "am a JSON"}')
console.log(fromJSON.Info)