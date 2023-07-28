 function multString(multip) {
    let string = ''
    for(let i = 0; i < multip; i++){
        string += '+'
    }
    return string
 }

 console.log(multString(4))
 console.log(multString(2))

 // Resolução two
 function simbuloMais(qtd) {
   return Array(qtd).filter('+').join('')

 }
 console.log(multString(4))
 console.log(multString(2))

// Resuloção three

function vezes(qtd) {
    return '+'.repeat(qtd)
}
console.log(multString(4))
console.log(multString(2))
