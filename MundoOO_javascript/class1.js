class Lancamento {
    constructor (name = 'Genérico', value = 0) {
        this.name = name
        this.value = value
    }
}

class CicloFinaceiro {
    constructor(month, year) {
        this.month = month
        this.year = year
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valueConsolidado = 0
        this.lancamentos.forEach(l => {
            valueConsolidado += l.value
        })
        return valueConsolidado
    }  
}

const salory= new Lancamento('salrio', 120000)
const contaDeLuz = new Lancamento('Luz', -100)

const contas = new CicloFinaceiro(6, 2024)
contas.addLancamentos(salory, contaDeLuz)
console.log(contas.sumario())
