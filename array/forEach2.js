Array.prototype.forEach2 = function(callBack) {
    for (let i = 0; i < this.length; i++) {
        callBack(this[i], i, this)
    }
}

const approved = ['Bill Gates', 'Stive Job', 'Tesla', 'Robert Kezack']

approved.forEach2(function(name, index) {
    console.log(`${index + 1}) ${name}`)
})