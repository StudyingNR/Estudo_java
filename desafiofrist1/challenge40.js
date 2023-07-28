function classificationNote(note) {
    if(note == 0 ||note <= 4.9) { 
        return 'D'
    } else if(note == 5 ||note <= 6.9) {
        return 'C'
    } else if(note == 7 || note <= 8.9) {
        return 'B'
    } else {
        return 'A'
    }
}


console.log(classificationNote(0))
console.log(classificationNote(3))
console.log(classificationNote(4.9))// d
console.log(classificationNote(5))
console.log(classificationNote(5.7))
console.log(classificationNote(6.9))// c
console.log(classificationNote(7))
console.log(classificationNote(7.9))
console.log(classificationNote(8.9))//b
console.log(classificationNote(9))
console.log(classificationNote(9.9))
console.log(classificationNote(10))
console.log(classificationNote(10))//a
