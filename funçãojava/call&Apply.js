function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
  }
  
  const produto = {
    nome: 'Carro Polo 200 TSI',
    preco: 50000,
    desc: 0.15,
    getPreco
  };
  
  const carro = { preco: 50000, desc: 0.20 };
  
  console.log(produto.getPreco());
  console.log(getPreco.call(carro));
  console.log(getPreco.apply(carro));
  
  console.log(getPreco.call(carro, 0.1, '$'));
  console.log(getPreco.apply(carro, [0.50, '$']));
  