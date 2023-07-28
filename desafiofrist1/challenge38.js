function printOdd(start = 0, end = 100) {
    if (start > end) {
        start = end + start
        end = start - end
        start = start - end
    }

    for (let i = start; i <= end; i++ ) {
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}
printOdd(19, 3)