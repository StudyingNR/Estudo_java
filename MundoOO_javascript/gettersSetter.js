const sequencia = {
    _value: 1,
    get value() { return this._value++ },
    set value(value) {
        if(value > this._value) {
            this._value = value
        }
    }
}

console.log(sequencia.value, sequencia.value)

sequencia.value = 1000
console.log(sequencia.value, sequencia.value)

sequencia.value = 500//the method set fez a alteração de value.
console.log(sequencia.value, sequencia.value)
