function checarYearBissexeto(year) {

    const divisivelPorQuatro = year % 4 == 0
    const divisivelPorCem = year % 100 == 0
    const divisivelPorQuatrocentos = year % 400 == 0

    
    return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
     
}


console.log(checarYearBissexeto(2020))
console.log(checarYearBissexeto(2021))


// Resolução two

function checarYearBissexeto(year) {
   return new Date (year, 1, 29).getDate() === 29 
}

console.log(checarYearBissexeto(2020))
console.log(checarYearBissexeto(2021))