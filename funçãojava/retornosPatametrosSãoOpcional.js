function area(largura, largura) {
    const area = largura * largura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(4, 4))
console.log(area(20, 20))
console.log(area(6, 6))

// Return & Parametro em JS são opciona pois se um função não retorna neum valor ela vai ficar undefined. 