function negativeNumber(array) {
   let qtdNegatives = 0
   for(let i = 0; i < array.length; i++) {
    if(array[i] < 0) {
        qtdNegatives++
    }
   }
   return qtdNegatives
}

array = [-1, 0, -2, 3, 5, -9, -8, -7, 6, 10]

console.log(negativeNumber(array))