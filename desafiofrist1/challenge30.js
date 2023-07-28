function  maiorMenor (array) {
    let maior
    let menor
    for(let i = 0; i < array.length; i++){
        if(maior === undefined && menor === undefined){
            maior = array[i]
            menor = array[i]
        } else {
            if(array[i] > maior){
                maior = array[i]
            }
            if(array[i] < menor) {
                menor = array[i]
            }
        }
    }
    return `parabéns Adriano você ira receber R$ ${maior} ${[maior, menor]}`
}

array = [1, 51, 30, 19, 27, 76, 20, 76000, 20000]
console.log(maiorMenor(array))