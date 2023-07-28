//função sem tetorno 
 function imprimaSoma(a, b){
    console.log(a + b)
 }

 imprimaSoma(2, 3);
 //esse comando vai dar NaN
 imprimaSoma(2)
 //ele vai fazer a soma dos dois primeiros números e vai inguinora o restante.
 imprimaSoma(2, 10, 4, 5, 6, 7, 8);
 imprimaSoma()


 //Função com torno
 function soma (a, b = 0){
    return a + b;   
 }

 console.log(soma(2 + 3));
 console.log(soma(2))
