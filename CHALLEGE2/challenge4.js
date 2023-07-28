function nameMonth(month) {
    switch(month){
        case 1:
            return 'January.'
        break
        case 2:
            return 'Februery.'
        break
        case 3:
            return 'March.'
        break
        case 4:
            return 'April.'
        break
        case 5:
            return 'May.'
        break
        case 6:
            return 'Jene.'
        break
        case 7:
            return 'July.'
        break
        case 8:
            return 'August.'
        break
        case 9:
            return 'September.'
        break
        case 10:
            return 'October.'
        break
        case 11:
            return 'November.'
        break
        case 12:
            return 'December.'
        break
        default:
            return 'Invalid month.' 
    }
}

console.log(nameMonth(1))



// resolução two

function mapeamentoMonth(number) {
    const mapeamento = [ 'Janeiro', 'Fevereiro', 'Março', 'Bril', 'Maio', 'Junho', 'Julho', 'Agosto','Setemnbro', 'Outubro', 'Novembro', 'Dezembro']
    
    return mapeamento [--number]
}

console.log(mapeamentoMonth(12))