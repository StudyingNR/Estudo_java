const funcs = [];
for (let i = 0; i < 10; i++){

    funcs.push(function(){
        console.log(i)
    })
}
//let salva o o endereço da variavel
funcs[2]();
funcs[8]();