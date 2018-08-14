import { Animal } from './animal';
export class Tiger extends Animal {
    jmpM : number

    constructor() {
        super()

        this.jmpM = 10
    }

    jumpNow() {
        super.run()
    }
}

let tg : Tiger = new Tiger()
tg.run()
tg.jumpNow()