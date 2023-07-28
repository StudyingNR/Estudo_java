function dayWeek(day) {
    switch (day) {
        case 1 :
            return 'Weekend'
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "business day"
        case 7: 
            return 'Weekeend'
        default:
            return 'Invalid day'
    }

}

console.log(dayWeek(1))
console.log(dayWeek(2))
console.log(dayWeek(3))
console.log(dayWeek(3))
console.log(dayWeek(4))
console.log(dayWeek(6))
console.log(dayWeek(7))
console.log(dayWeek('o'))