const moduleA = require('./moduleA')
console.log(moduleA.hello)

const saudacao = require('saudacao')
console.log(saudacao.hello2)


const http = require('http')
http.createServer((req, rep) => {
    res.write("Good Morning!")
    res.end()
}).listen(8080)

// This code esta sendo executado na porta 8080