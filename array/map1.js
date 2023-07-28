const nums = [100, 200, 300, 400, 500, 1000]

let result = nums.map(function(e) {
    return e * 10
})

console.log(result)

const sum10 = e => e * 10
const cem = e => e * 100
const forMany = e => `Parabém Adriano you are recebendo now in your corretora $ ${parseFloat(e).toFixed(2)/*.replace('.', ',')*/}`

result = nums.map(sum10).map(cem).map(forMany)

console.log(result)