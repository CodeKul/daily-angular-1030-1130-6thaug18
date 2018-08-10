let obj = {
    nm: 'android',
    ver: 10,
    cb: () => 10 * 10
}
console.log(`
                Name is ${obj.nm} 
                versibj.cb(on is ${obj.ver} 
                fn is ${obj.cb()}
            `)

function Car() {

}

Car.prototype.incSpd = () => console.log(`Speed called`)
Car.prototype.speed = 100
let cr = new Car()
cr.speed = 200
cr.incSpd()

class Forest { }

class Animal {
    constructor(fsrt) {
        this.legs = 4
        this.fsrt = frst
    }

    walk() { console.log(`Animal Walking`) }

    run() { console.log(`Animal Running`) }
}

let frst = new Forest()
let an = new Animal(frst) // animal in dependent on forest
an.run()
an.walk()
// IIFE - Module Design Pattern

let Device = (() => {
    let obj = {
        rtng: 5,
        mem: 8
    }
    return obj
})()

let Machine = ((refDev) => {
    console.log(`Rating is ${refDev.rtng}`)
    let obj = {
        mecha : false
    }
    return obj
})(Device) // machine is dependent on device










