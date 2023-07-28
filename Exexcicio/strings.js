const scool = "Cod3r";

//esse comando vai escrever o caracter que estiver nessa posição.
console.log(scool.charAt(4));

//Quando não tiver caracter nesta posição ele vai tetornar vazio.
console.log(scool.charAt(5));

//Esse comando pega o código da sting.
console.log(scool.charCodeAt(3));

// Esse comando retorna o indeice da string que esta nesta posição.
console.log(scool.indexOf('3'));

//esse comando faz a escrita do caractar apartir do indice selecionado.
console.log(scool.substring(2));

// esse comando faz a escrita dos caracter no intervalo selecionado.
console.log(scool.substring(0, 3));

// Esses comando faz a junção de textos.
console.log('scool '.concat(scool));
console.log('Scool ' + (scool));

//Esse comando faz a substituição do caracter.
console.log(scool.repeat(3, 'e'));

//this comando we permeite selecionar o tipo de separador end cria um array. 
console.log("Ana, Maria, Pedro".split(','));