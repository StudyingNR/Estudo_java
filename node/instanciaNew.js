// Uma factory return a new object
module.exports = () => {
    return {
        value: 1,
        inc() {
            this.value++
        }
    }
}