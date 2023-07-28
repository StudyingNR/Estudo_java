function formatarVorlorDecim (valor1 = 0, valor2 = 0) {
    let convercao = valor1 + valor2
    const converte = convercao.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})

console.log(converte)
}

formatarVorlorDecim(0.1 + 0.2)

//forma 2
function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)