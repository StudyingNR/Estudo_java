function fector (number) {
    if (number == 0 ) {
        return 1
    } else {
        return number * fector(number - 1)
    }
}

console.log(fector(10))
