const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo) {
    process.stdout.write('Fala Anonimo!!\n')
    process.exit()
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('date', date => {
        const name = date.toString().replice('\n', '')
    
        process.stdout.write(`Fala ${name}!!\n`)
        process.exit()
    })
}