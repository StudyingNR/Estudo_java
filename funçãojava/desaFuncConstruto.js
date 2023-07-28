function Pessoa (name){
    this.name = name

    this.falar = function(){
        console.log(`My name is ${this.name}`)
    }
}

const p1 = new Pessoa ('Adriano')
p1.falar()