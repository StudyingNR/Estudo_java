function repet(cod, qtd) {
    let result = []
    let initilValue = 0
    for(let i = 0;i < qtd; i++) 
        result.push(cod)
    
    return result
}

console.log(repet('codigo', 3 ))
console.log(repet(10000, 100))