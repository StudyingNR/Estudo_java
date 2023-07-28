function wage(hoursWorked, valueHour) {
    const wageBrute = hoursWorked * valueHour
    const wageLiquid = wageBrute - wageBrute * (30/100)
    return `Wage liquid é igua a ${wageLiquid.toFixed(2)}.`
}

console.log(wage(180, 60))
console.log(wage(240,100))
console.log(wage(220, 7.60))