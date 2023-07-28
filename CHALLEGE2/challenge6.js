function opposite(value) {
    const type = typeof value 
    if(type == 'boolean') return !value
    else if(type == 'number') return -value
    else return `Bollean or number esperado, but the parameto e  do type ${type}`
}

console.log(opposite(1))
console.log(opposite('6'))
console.log(opposite(-100000))
console.log(opposite("programção"))



