function impaPair(arrayNumber) {
    let qtdImpa = 0
    let qtdPair = 0
    for(let i = 0; i < arrayNumber.length; i++){
        if(arrayNumber[i] % 2 == 0) {
            qtdPair++
        } else {
            qtdImpa++
        }
    }
    console.log(`${qtdPair} pair number and  ${qtdImpa} impa number.`)
}

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 28, 19, 76, 20, 79]
impaPair(array)



