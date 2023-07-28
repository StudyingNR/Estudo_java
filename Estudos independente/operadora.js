function calculoTarifaOperadora(min) {
    const menExedidos = min + 2
    if(min <= 100) {
        console.log(`Valor a pagar: R$ 50.00`)
    }else {
        const minute = ((min - 100) * 2 + 50).toFixed(2)
        console.log(`Valor a pagar: R$ ${minute}`)
    }
}
calculoTarifaOperadora(103)
calculoTarifaOperadora(200)
calculoTarifaOperadora(101)
calculoTarifaOperadora(22)
calculoTarifaOperadora(1)

