Array.prototype.filter2 = function(callBack) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callBack(this[i], i, this)) {
            newArray.push(this[i])       
        }              
    }
    return newArray
}

const products = [
    { name: 'Leptop', price: 2499, fragile: true },
    { name: 'IPad Pro', price: 4199, fragile: true },
    { name: 'Glass', price: 12.49, fragile: true },
    { name: 'Plastic cup', price: 18.99, frageli: true }
]


const expensive = products => products.price >= 00
const frageli = products => products.fragile

console.log(products.filter2(expensive).filter2(frageli))