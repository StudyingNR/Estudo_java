// Cadeia de prototype (prototype chain)
Object.prototype.attr0 = 10 // não e recomendado usar pois pode afetar toda a estrutura do prototype
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: 2 }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const car = {
    velAtual: 0, 
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const polo = {
    modelo: "Highline 200 TSI",
    ano: 2022,
    propietario: 'Adriano',
    velMax: 197
}

const porche = {
    modelo: 'Taican',
    velMax: 400
}

const ferrari = {
    modelo: 'LaFerrari', 
    status() {
        return `${this.modelo}: ${super.status()}`// do the shadowing
    }
}

Object.setPrototypeOf(polo, car)
Object.setPrototypeOf(ferrari, car)

console.log(polo)
console.log(ferrari)

ferrari.acelerarMais(290)
console.log(ferrari.status())

polo.acelerarMais(150)
console.log(polo.status())