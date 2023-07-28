function troco(priUnd, qtd, moneyRes){
    const monTroco = (moneyRes - (priUnd * qtd)).toFixed(2)
    if(monTroco == 0){
        return console.log(`Não a troco`)
    }else if(monTroco > 0) {
        return console.log(`Troco = ${monTroco}`)
    }else{
        return console.log(`Esta faltando = ${monTroco}`)
    }
}

console.log(troco(597.98, 100, 59798))
console.log(troco(250.40, 10, 20000))
console.log(troco(390, 123, 600))
console.log(troco(12870,76, 200, 59798))