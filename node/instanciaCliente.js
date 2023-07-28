const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNew')()
const contadorD = require('./instanciaNew')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.value, contadorB.value)

contadorC.inc()
contadorC.inc()
console.log(contadorD.value, contadorC.value)