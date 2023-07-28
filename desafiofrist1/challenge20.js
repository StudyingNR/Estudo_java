function sacCharine (withdrawalAmount) {
    let counter100 = 0
    let counter50 = 0
    let counter10 = 0
    let counter5 = 0
    let counter1 = 0
    let valueNote =
    counterValueNote( withdrawalAmount)
    while ( withdrawalAmount >= valueNote) {
        switch (valueNote){
            case 100:
                withdrawalAmount -= 100
                counter100++
            break
            case 50:
                withdrawalAmount -= 50
                counter50++
            break
            case 10:
                withdrawalAmount -= 10
                counter10++
            break
            case 5:
                withdrawalAmount -= 5
                counter5++
            break
            case 1:
                withdrawalAmount -=1
                counter1++
            break

        } 
        valueNote =
        counterValueNote(withdrawalAmount)     
    }

    return elaborateResult (counter100, counter50, counter10, counter5, counter1)
}

function counterValueNote (withdrawalAmount) {
    if (withdrawalAmount >= 100) {
        return 100
    } else if ( withdrawalAmount >= 50) {
        return 50
    } else if(withdrawalAmount >= 10) {
        return 10
    } else if ( withdrawalAmount >= 5) {
        return 5
    } else if (withdrawalAmount  >= 1) {
        return 1
    }
}

function elaborateResult (counter100, counter50, counter10, counter5, counter1) {
    let result = ''
    if (counter100 > 0) {
        result += `${counter100} BRL 100 note(s).`
    }

    if (counter50 > 0){
        result += `${counter50} BRL 50 note(s).`
    }

    if (counter10 > 0) {
        result += `${counter10} BRL 10 note(s).`
    }

    if (counter5 > 0) {
        result += `${counter5} BRL 5 note(s).`
    }

    if (counter1 > 0) {
        result += `${counter1} BRL 1 note(s).`
    }
    return result
}

console.log(sacCharine(153)) 
