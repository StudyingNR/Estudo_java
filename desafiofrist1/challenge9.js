function classificaoAluno (nota) {
    let notaCorrigida = arredondar (nota)
    if ( nota >= 40) {
        return console.log(`Aprovado com nota ${notaCorrigida}`)
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`)
    }
}


function arredondar (nota) {
    if ( nota % 5 > 2) {
        return nota + ( 5 - (nota % 5 ))
    } else {
        return nota
    }
}

classificaoAluno(88)
classificaoAluno(25)
classificaoAluno(51)
classificaoAluno(41)
classificaoAluno(38)
classificaoAluno(37)
classificaoAluno(60)