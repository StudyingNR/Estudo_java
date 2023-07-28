// novo recurso do ESP2015

const pessoa = {
    nome :'Ana',
    idade:5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 76.000   
    }
}

//esse comando faz a leitura de nome e idade
const {nome, idade} = pessoa
console.log(nome, idade)

// esse comando faz os dados de nome e idade ser atribuido as variavel n, i
const {nome: n, idade: i,} = pessoa
console.log(n, i)

// esse comando faz aleitura de variavel não atribuida retornando underfined
const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

//usamos esse comando assemamos o dado dentro de endereço
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//esse comando vai gerar erro pois conta não foi iserido ao constante pessoa.
const {conta: {ag, num}} = pessoa
console.log(ag, num)

