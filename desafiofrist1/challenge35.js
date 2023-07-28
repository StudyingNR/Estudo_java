let arrayPilha =  [1, 2, 3, 4, 5]
let arrayAdd = [6, 7, 8, 9, 10]

function concateArray(arrayStart, arrayAdds) {
    for (let i= 0; i < arrayAdds.length; i++) {
        console.log(arrayAdds[i])
        arrayStart.push(arrayAdds[i])

    }
    console.log("Add array: " + arrayAdds)
    console.log("Result array:" + arrayStart)
}

concateArray(arrayPilha, arrayAdd)