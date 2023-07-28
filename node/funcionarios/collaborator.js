const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
const { reduce } = require('lodash')

const chineses = f => f.pais ==='China'
const woman = f => f.genero === 'F'
const smollWage = (func, funcAtual) => {
    return  func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    const func = funcionarios
        .filter(chineses)
        .filter(woman)
        .reduce(smollWage)

    console.log(func)
})