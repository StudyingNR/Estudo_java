 let numero = 1;
 {
    let numero = 2;
    console.log('Dentro = ', numero);
 }

 console.log('Fora =', numero)


//Pelo fato de let ter o scopo de bloco ele executa os cois comando ao contrario do var que não possui esse atributo.