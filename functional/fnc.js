/**
 * 1) functions can be passed as parameter
 * 2) functions can be returned
 * 3) functions are assigned to variables
 */

function funOne() { console.log(`First Functon`) }

/*
let varOne = funOne
console.log(`${varOne}`)

let varTwo = function () { }

let varThree = () => console.log(`This is lambda`)
let varFour = (nm1, nm2) => nm1 + nm2
console.log(`Addition is ${varFour(451,56)}`)

function funTwo() {
    console.log(`returning function`)
    return function() {
        console.log(`Function being returned`)
    }
}

let varFv = funTwo()
console.log(`${varFv}`)
varFv()

funTwo()()*/

/*function funThree(cb) {

    console.log(`Function Three called`)
    cb()
}

funThree(funOne)
funThree(function () {
    console.log(`Passed Anonymous function`)
})
funThree(() => console.log(`Passed Lambda`))*/

console.log(`Before Timeout`)
setTimeout(
    () => console.log(`Function being invoked in future`),
    1500
)
console.log(`Log printed`)


let hi = 'android'
hi = 10




