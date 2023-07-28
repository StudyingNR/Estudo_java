let array = [1, 2, 3, 4, 5]
function arrayMultiplay(array, multiplay) {
    let resultArray1 = []
    array.forEach(elements => {
        resultArray1.push(elements * multiplay)
    })

    return resultArray1
}

function multiplayArrayIfGreaterThan5(Array, multiplay) {
    let arrayMultiplay2 = []
    if (multiplay < 5) return
    array.forEach(elements => { arrayMultiplay2.push(elements * multiplay) })
    return arrayMultiplay2
}

console.log(arrayMultiplay(array, 3))
console.log(multiplayArrayIfGreaterThan5(array, 11))