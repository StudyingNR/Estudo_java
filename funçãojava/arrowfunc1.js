let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // o return já esta implícito.
console.log(dobro(Math.PI))

let ola = function (){
    return 'ola'
}

ola = () => 'ola'
ola = _ => 'ola' // Possui param
console.log(ola())

