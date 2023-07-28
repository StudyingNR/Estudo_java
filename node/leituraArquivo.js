const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sicrona

const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)


// asicrona

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.user}: ${config.db.host}: ${config.db.port}`)

})


// chama aparti de arquivo JSON

const config = require('./arquivo.json')
console.log(config.db)



// Lendo um diretorio
fs.readdir(__dirname, (err, arquivo) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivo)
})