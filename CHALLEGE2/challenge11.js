
function removerProprietario(obj, nameDaPropriedade) {
    const removerPropriedade = ({ a: 1, b: 2 }, 'A')
    const copia = Object.assign({}, obj)
    delete copia[nameDaPropriedade]
    
    return copia
  }

console.log(removerProprietario(removerPropriedade))
// Resolução two

function removerPropriedade(obj, nameDaPropriedade) {
    const copia = { ...obj }
    delete  copia[nameDaPropriedade]

    return copia
}