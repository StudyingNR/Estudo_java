function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico(pode usar 'this.' para chamar a função)

    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }


}


const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const MeuPoloTsi = new Carro (200, 20)
MeuPoloTsi.acelerar()
MeuPoloTsi.acelerar()
MeuPoloTsi.acelerar()
MeuPoloTsi.acelerar()
console.log(MeuPoloTsi.getVelocidadeAtual())