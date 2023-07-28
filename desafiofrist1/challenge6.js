function aplicacaoFinanceiraJuroSimple(captalIn, taxaJuros, tempoAplicado) {
    const juros = captalIn * (taxaJuros / 100) * tempoAplicado
    let montante = captalIn + juros
    console.log(`R$ ${montante}`)
}

aplicacaoFinanceiraJuroSimple(1200, 2, 14 )

function aplicacaoFinanceiraJurosComposto(capitalIn, taxaJuros, tempoAplicado) {
    return capitalIn * (1 + taxaJuros) ** tempoAplicado
}

console.log(aplicacaoFinanceiraJurosComposto(620, 0.0015, 2))