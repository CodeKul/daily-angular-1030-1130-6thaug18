let fnVar: () => number = () => 10

let varAny: any = 10
varAny = fnVar
varAny = 'codekul.com'

let objVar: { [key: string]: number } = {
    nm: 10,
    ver: 89
}
// objVar = 10

let clsObjVar: Date = new Date()

class Mobile { }
let mbObj: Mobile = new Mobile()