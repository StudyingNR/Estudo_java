class GranFather {
    constructor (fullName) {
        this.fullName = fullName
    }
}

class Father extends GranFather {
    constructor(fullName, profissao = 'Engenheiro de Software') {
        super(fullName)
        this.profissao = profissao
    }
}

class Filho extends Father {
    constructor () {
        super('Santos')
    }
}

const filho = new Filho
console.log(filho)