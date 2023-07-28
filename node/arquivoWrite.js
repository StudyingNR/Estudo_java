const fs = require('fs')

const produto = {
    name: 'Carro',
    modelo: 'Highline 200 TSI',
    proprietario: 'Adriano P.',
    data: '2023' 
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
  console.log( err || 'Arquivo salvo!')
})