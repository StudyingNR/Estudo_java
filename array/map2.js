carrinho = ['{ "name": "rubber", "price": 3.45   }',
'{ "name": "notebook", "price": 13.90 }',
'{ "name": "kit pencil", "price": 41.22 }',
'{ "name": "pen", "price": 7.50 }']

const forObject = json => JSON.parse(json)
const justPrice = product => product.price

const result = carrinho.map(forObject).map(justPrice)

console.log(result)