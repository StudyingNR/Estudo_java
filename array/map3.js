Array.prototype.map2 = function(callBack) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callBack(this[i], i, this))
        return newArray
    }   
}

carrinho = ['{ "name": "rubber", "price": 3.45   }',
'{ "name": "notebook", "price": 13.90 }',
'{ "name": "kit pencil", "price": 41.22 }',
'{ "name": "pen", "price": 7.50 }']

const forObject = json => JSON.parse(json)
const justPrice = product => product.price

const result = carrinho.map2(forObject).map(justPrice)

console.log(result)