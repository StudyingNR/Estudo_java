function calcularValorDaHoraTrabalhada(salario, jornadaMensal)  {
    const valorHora = salario / jornadaMensal 

    return valorHora.toFixed(2)
}


console.log(calcularValorDaHoraTrabalhada(2088.25, 220))


function horasTrabalhadaParaDeTerminadoObjetivo(objetivo) {

    const horasParaAtigirObjetivo = objetivo / 9.49
    const valorDay = [horasParaAtigirObjetivo / 24]

    return horasParaAtigirObjetivo.toFixed(2), 
    valorDay
}


console.log(horasTrabalhadaParaDeTerminadoObjetivo(1000000))