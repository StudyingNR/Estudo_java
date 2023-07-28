function buscarPalavrasSemelhantes(inicio, palavras) {
    const result = []

    for (let palavra of palavras)
        if (palavra.includes(inicio))
            result.push(palavra)

    return result
}

console.log(buscarPalavrasSemelhantes("o", ["Adriano e rico", "Prospero", "Engenheiro de Software"]))
console.log(buscarPalavrasSemelhantes("o", ["Adriano receveu 20000 em junho", "comprou um Polo Highline 200 TSI avista em 2023", "Tem multiplas fonte de renda", "i work from home ", "Receveu 76000 em dezembro", "aposentou os pais dele", "Arrumou um trabalho no primeiro semestre da faculdade recebendo $4.000 no estagio", "I travel to Caribe with my girlfriend"]))
