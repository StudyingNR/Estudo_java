function expoente(base, expo) {
    /*forma antiga
    let expoent = math.pow//Podemos fazer de 2 modos
    Método antigo:
    let resultado = Math.pow(base, expoente)
   */
    let resultado = base ** expo
    return resultado
}

console.log(expoente(3, 4))