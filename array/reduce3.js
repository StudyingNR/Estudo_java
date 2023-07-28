Array.prototype.reduce2 = function(callBack,valueInicial) {
    const idexInicial = valueInicial ? 0 : 1
    let acumulador =valueInicial ||this[0] 
    for (let i = 1; i < this.length; i++) {
        acumulador = callBack(acumulador, this[i], i, this)
    } 
    return acumulador
}

const sum = (total, value) => total + value
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(sum, 21))
