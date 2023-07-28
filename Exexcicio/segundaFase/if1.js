function soBoaNoticia(nota){
    if (nota >= 7){
        console.log("Aprovado com " + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(9.4)
soBoaNoticia(6.9)//Esta nota não foi imprimida pois ela e menor que 7


function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdadeiro... ' + valor)
    }   
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)//Unico número que e falso
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})