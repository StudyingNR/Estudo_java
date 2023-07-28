function calculationNot(nota1, nota2) {
    const result = nota1 + nota2
    return result >= 60 ? `NOTA FINAL = ${result}` : "Reprovado!"
}

console.log(calculationNot(25, 35))