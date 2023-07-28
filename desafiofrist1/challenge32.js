function arrayAverage(array) {
    let sum = 0
    for(let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length
}

array = [1, 4, 5, 8, 2]

console.log(arrayAverage(array))