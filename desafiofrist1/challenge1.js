 function clacificacaoTriangulo (l1, l2, l3) {
    if (l1 == l2 && l2 == l3 ){
        return "Este triângulo e equeilátero!"
        } else if(l1 == l2 || l2 == l3 || l1 == l3 ) {
            return "Este triângulo e isósceles!"
        } else {
            return "Este triângulo e escaleno!"
        }
}

console.log(clacificacaoTriangulo(1, 1, 1));
console.log(clacificacaoTriangulo(2, 5, 5));
console.log(clacificacaoTriangulo(2, 1, 6));