 function calculateSale(code, amount) {
    switch (code) {
        case 100:
            return amount * 3
        break
        case 200:
            return amount * 4
        break
        case 300:
            return amount * 5.50
        break
        case 400:
            return amount * 7.50
        break
        case 500:
            return amount * 3.50
        break
        case 600:
            return amount * 2.80
        break
        default:
            return "Product does not exist"
    }
 }

 console.log(calculateSale(100, 1))
 console.log(calculateSale(200, 2))
 console.log(calculateSale(300, 2))
 console.log(calculateSale(400, 2))
 console.log(calculateSale(500, 2))
 console.log(calculateSale(600, 2))
 console.log(calculateSale(700, 1))