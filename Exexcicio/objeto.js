const prod1 = {};
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço;

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
};

console.log(prod2);

//json é um formato de testual para objeto(ou atributos)
'{ "nome": "Camisa Polo", "preco": 79.90'
console.log(prod2)