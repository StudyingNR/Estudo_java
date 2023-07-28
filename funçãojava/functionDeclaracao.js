// function declaration
function soma(x = 3, y = 4) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return console.log(x - y + soma())
}

sub(3, 4)

// Named functio expression
const mult = function mult (x, y) {
    return x * y
}