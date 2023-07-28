const products = [
    { name: 'Leptop', price: 2499, fragile: true },
    { name: 'IPad Pro', price: 4199, fragile: true },
    { name: 'Glass', price: 12.49, fragile: true },
    { name: 'Plastic cup', price: 18.99, frageli: true }
]

console.log(products.filter(function(p) {
    return false
}))


const expensive = products => products.price >= 500
const frageli = products => products.fragile

console.log(products.filter(expensive).filter(frageli))