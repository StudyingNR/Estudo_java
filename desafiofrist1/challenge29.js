function intervaloArray(array) {
    qtdNumberArray = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] >= 10 && array[i] <= 20) {
            qtdNumberArray++
        }
    }

    return `${qtdNumberArray} number dentro do intervalo.`
}

array = [10, 11, 12, 13, 15, 14, 18, 17, 199, 20, 23, 26, 76]

console.log(intervaloArray(array))