function calcularAreaDoTriangulo(base, height) {
    const area = (base * height) / 2
    return area.toFixed(2)
}

console.log(calcularAreaDoTriangulo(10, 15))
console.log(calcularAreaDoTriangulo(7, 9))
console.log(calcularAreaDoTriangulo(9.25, 13.1))
