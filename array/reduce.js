const students = [
    { name: 'João', note: 7.3, bolsista: false },
    { name: 'Maria', note: 9.2, bolsista: true },
    { name: 'Pedro', note: 9.8, bolsista: false },
    { name: 'Anna', note: 8.7, bolsista: true }
]

const result = students.map(a => a.note).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
},23)

console.log(result)