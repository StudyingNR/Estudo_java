function despesasTotal(itens) {
    let total = 0
    
    for(let item of itens)
        total += item.price
    
    return total
}

console.log(despesasTotal([
    { name: "Jornal online", categoria: "Informação", price: 89.99 },
    { name: "Cinema", categoria: "Entretenimento", price: 150 }
]))


// Resolução two
function despesasTotal(itens) {
    return itens.map(item => item.price).reduce((acumulador, valorAtual) => acumulador + valorAtual) 
}


console.log(despesasTotal([
    { name: "Carro Polo Highline 200 TSI", categoria: "Qualidade de life", price: 79000 }, 
    { name: "Viajens", categoria: "Experiência", price: 900 }
]))


// Resolução three

function despesasTotais(itens) {
    return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.price, 0)
}

console.log(despesasTotais([
    { name: "Carro Polo Highline 200 TSI", categoria: "Qualidade de life", price: 79000 }, 
    { name: "Viajens", categoria: "Experiência", price: 900 }
]))