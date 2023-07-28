 function calculateHeight(height1, rate1, height2, rate2){
    if(height1 == height2) {
        if(rate1 > rate2) {
            return "Child 1 will overtake Child 2 in 1 year."
        } else if(rate1 < rate2) {
            return "Child 2 will overtake Child 1 in 1 year."
        } else {
            return "Children are equal in height and growth."
        }
    } else{
        if(height1 > height2) {
            if(rate1 >= rate2) {
                return "The lesser child shall not surpass the greater."
            } else {
                return `The smaller child will surpass the older one in ${calculateTime(height2, rate2, height1, rate1)} year.`
            }         
        } else {
            if(rate2 >= rate1) {
             return "The smaller child will not surpass the older one."   
            } else{
                return `The smaller child will surpass the older one in ${calculateTime(height1, rate1, height2, rate2)} year.`
            }
        }
    } 
 }

function calculateTime(heightSmall, rateSmall, heightBig, rateBig) {
    let qtdYear = 0
    while (heightSmall < heightBig){
        heightSmall += rateSmall
        heightBig += rateBig
        qtdYear++
    }
    return qtdYear
}

console.log(calculateHeight(150, 2, 130, 4))