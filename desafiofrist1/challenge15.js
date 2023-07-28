function escolhaCarro(modelo) {
    switch(modelo){
        case "Polo 200 TSI":
            return console.log(`Compra efertua com sucesso Adriano.`)
        break
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return console.log(`Tem certeza que não prefere este modelo?`)
        break
        default:
            return console.log(`Não trabalhamos com este tipo de automóvel aqui.`)
        
    }
}

escolhaCarro("Polo 200 TSI")
escolhaCarro('sedan')
escolhaCarro('motocicleta')
escolhaCarro('caminhonete')
escolhaCarro('tratore')
escolhaCarro('celta')