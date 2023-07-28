//Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1 () { }

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0] (2, 5))

// Armazenar em um atributo de objecto
const obj = {}
obj.falar = function() { return 'Opa' }
console.log(obj.falar ())

// Passar uma função como parametro
function  rum(fun) {
    fun()
}
rum ( function () {console.log('Execultando...')})

// Um função pode retornar/conter um função
function soma (a, b) {
    return function (c){
        console.log(a + b + c)
    }
}
soma (7, 2) (1)
const somaNove = soma (7, 2)
somaNove (1)