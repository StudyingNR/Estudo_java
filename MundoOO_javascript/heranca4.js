function MeObject() {}
    console.log(MeObject.prototype)

    const obj1= new MeObject
    const obj2 = new MeObject
    console.log(obj1.__proto__ === obj2.__proto__)
    console.log(MeObject.prototype === obj1.__proto__)

    MeObject.prototype.name = 'Teves'
    MeObject.prototype.speak = function() {
        console.log(`Good morning, my name is ${this.name}!`)
    }

obj1.speak()

obj2.name = 'Rebeca'
obj2.speak()

const obj3 = {}
obj3.__proto__ = MeObject.prototype
obj3.name = 'Obj3'
obj3.speak()

