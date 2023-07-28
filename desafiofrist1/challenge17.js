function calculoReajuste(plano, SalarioAtual) {

    switch(plano){
        case 'A':
            return SalarioAtual * 1.1
        break
        case 'B':
            return SalarioAtual * 1.15
        break
        case 'C':
            return SalarioAtual * 1.2
        break 
        default:
            return 'Plano invalido.'
    }
}

console.log(calculoReajuste('A', 1000))
console.log(calculoReajuste('B', 1000))
console.log(calculoReajuste('C', 1000))
console.log(calculoReajuste('D', 1000))