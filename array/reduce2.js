const students = [
    { name: 'João', note: 7.3, bolsista: false },
    { name: 'Maria', note: 9.2, bolsista: true },
    { name: 'Pedro', note: 9.8, bolsista: false },
    { name: 'Anna', note: 8.7, bolsista: true }
]

//Todos os alunos são bolsista?
const todosBolsista = (result, bolsista) => result && bolsista

console.log(students.map(a => a.bolsista).reduce(todosBolsista))

//Algun student e bolsista?
const justBolsista = (result, bolsista) => result || bolsista

console.log(students.map(a => a.bolsista).reduce(justBolsista))