function novoProduto (produto, preco ){
    return{
        produto, 
        preco,
        desconto: 0.1
    }

}

console.log(novoProduto("Caro Polo 200 TSI ", 70000.87))
console.log(novoProduto('Ipone14', 3097.23 ))
console.log('Prabéns Adriano pelos produtos adiqueirido!!!')