function stringCheck(string1, string2) {
    let isContained = true;
    for (let i = 0; i < string1.length; i++) {
        let characterString1 = string1.charAt(i).toLowerCase() 
        for (let j = 0; j < string2.length; j++) {
            let characterString2 = string2.charAt(i).toLowerCase()
            if (characterString1 == characterString2) {
                isContained = true
                break
            } else {
                isContained = false
            }
        }
        if (!isContained) {
            return isContained
        }
    }
    for (let i = 0; i < string2.length; i++) {
        let characterString2 = string2.charAt(i).toLowerCase()

        for (let j = 0; j < string1.length; j++) {
            let characterString1 = string1.charAt(i).toLowerCase()

            if (characterString1 == characterString2) {
                isContained = true
                break
            } else {
                isContained = false
            }
        }
        if (!isContained) {
            return isContained
        }
    }
    return isContained
}

console.log(stringCheck('riquesa', 'riquesa'))