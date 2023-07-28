const student = [
    { name: 'João', note: 7.9 },
    { name: 'Maria', note: 9.2 }
]

// Imperativa
let total1 = 0
for (let i =0; i < student.length; i++) {
    total1 += student[i].note
}
console.log(total1 / student.length)

// Declarativa
const getNota = student => student.note
const sum = (total, atual) => total + atual
const total2 = student.map(getNota).reduce(sum)
console.log(total2 / student.length)