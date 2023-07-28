//utilizando anotação ponto podemos acessar afunção Math.ceil que fez o aredondamento do valor
console.log(Math.ceil(6.1))

const obj1 = {}//objeto literal
obj1.nome = 'Bola'//utilizando notação ponto podemos auterar os dados de um objeto.


//Utilizando this.(nome do atributo) deiixa a função publica podendo ser acessada de fora da function.
function Obj(nome){
    this.nome = nome   
}
const obj2 = new Obj ('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)