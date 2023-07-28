function Classroom(name, movieId) {
    this.name = name
    this.movieId = movieId
}

const classroom1 = new Classroom(' Welcome', 980)
const classroom2 = new Classroom('See you soon',890 )

console.log(classroom1, classroom2)

// Simulando o operador new

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const classroom3 = novo(Classroom,'Welcome',908)
const classroom4 = novo(Classroom,'See you soon',809)
console.log(classroom3, classroom4)