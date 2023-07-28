const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))     
}) 

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        name: req.body.name,
        price: req.body.price
    })    
    res.send(produto)
})


// Esta function autera o produtos e podemos auterar a forma com os produtos são exibidos
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price 
    })
    res.send(produto)
})
app.delete('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})