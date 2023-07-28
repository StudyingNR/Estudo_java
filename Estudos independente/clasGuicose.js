function calGuicosePerson(guicose) {
    const guic = guicose.toFixed(1)
    if(guicose <= 100) {
        return 'Normal'
    }else if(guicose > 100 && guicose <= 140){
        return 'Elevada'
    } else {
        return 'Diabetes'
    }
}

console.log(calGuicosePerson(17))
console.log(calGuicosePerson(143.2))
console.log(calGuicosePerson(90))
console.log(calGuicosePerson(140))
