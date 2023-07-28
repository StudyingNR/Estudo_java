// Closerer e um escopo criado quando uma função é declarada esse escopo prermite a função acesse a e manipula váriavel externas á function.

const x ='Global'

function fora() {
    const x = 'Local'
    function dentro () {
        return x
    }
    return dentro
}

const minhaFunction = fora()
console.log(minhaFunction())