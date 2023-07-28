function fruits(fruit) {
    switch ( fruit) {
        case 'Apple':
            return console.log(`We don't sell this fruit here.`)
        break
        case 'Kiwi':
            return console.log(`We are short of kiwi.`)
        break
        case 'Watermelon':
            return console.log(`here it is, it's 3 reais a kilo.`)
        break
        default:
            return console.log(`Erro, invalid fruit!`)
    }
}


fruits('Apple')
fruits('Kiwi')
fruits('Watermelon')
fruits('coco')
fruits('Apple')