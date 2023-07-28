function teste1(num){
    if(num > 7)
        console.log(num)
    
    console.log('final')
}

teste1(6)
teste1(8)


function teste2(num) {
//Cuidado com o ';', não usar como estrutura de controle
    if(num); {
        console.log(num)
    }

}

teste2(6)
teste2(8)