/*Esta constante vai retorna sempre o próximo valor de _id e converter ele em JSON*/
const sequence = {
    _id: 1, 
    get id() { return this._id++ }

}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto

    return produto
}


function getProduto(id) {
    return produtos[id] || {}
}


function getProdutos() {
    return Object.values(produtos)
}

function excluirProdutos (id) {
    const produto = produtos[id]
    delete produtos[id]
    return produtos
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProdutos }