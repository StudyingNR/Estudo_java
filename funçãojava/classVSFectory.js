class Pessoa{
    constructor (name) {
        this.name = name
    }

    falar () {
        console.log(`My name is ${this.name}`)
    }
}

const p1 = new Pessoa('Adriano')
p1.falar()


//Function Factory

const criarPessoa = name => {
    return {
        falar: () => console.log(`My name is ${name}`)
    }
}

const p2 = criarPessoa(`Livia`)
p2.falar()