function tratarErroElancar(erro){
    //throw new Error('...')
    //throw  10
    //throw true
    //throw 'Erro na sistema tente mais tarde obrigado'
    /*throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }*/
}

function imprimirNomeGritado (obj){
    try{
            console.log(obj.name.toUpperCase() + '!!!')
        } catch (e) {
            tratarErroElancar(e)
        } 
         finally{
            console.log('fim do programa')
        }

}
const obj = { name: 'Roberta' }
imprimirNomeGritado(obj)