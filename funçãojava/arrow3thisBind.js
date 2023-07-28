let comParaComThis = function (param) {
    console.log(this === param)
}
comParaComThis(global)

// esta function faz a comparação do this com o objeto global.

const obj = {}
comParaComThis = comParaComThis.bind(obj)

comParaComThis (global)
comParaComThis(obj)

let comParaComThisArrow = param => console.log(this === param) 
comParaComThis(global)
comParaComThisArrow(module.exports)

comParaComThisArrow = comParaComThisArrow.bind(obj)
comParaComThisArrow(obj)
comParaComThisArrow(module.exports)


