function calculationAnnuity(month, value) {
    if (month > 0 && month < 13) {
        atraso = month - 1
        return (value * (( 1 + (5 / 100)) ** atraso)).toFixed(2)
    } else {
        return 'Invalid Month.'
    }   
}

console.log(calculationAnnuity(4, 100))