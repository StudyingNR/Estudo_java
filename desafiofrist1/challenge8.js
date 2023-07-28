let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 28, 56, 0"

function avaliaPontuacoes(stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebradeRecords = 0;
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]
    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebradeRecords++
        } else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1;
        }
    }
    return [qtdQuebradeRecords, piorJogo]
}

console.log(avaliaPontuacoes(stringPontuacoes))