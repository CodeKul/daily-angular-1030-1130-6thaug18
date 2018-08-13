import { My } from './mycls'

export class Our {
    my: My

    constructor(m: My) {
        this.my = m
    }
}

export class Their {
    constructor(
        private my: My = new My(), // default params
        private our: Our = new Our(my)
    ) { }
     
    value(nm?: string, os?: number) { } // optional params

    references() { }
}
let th = new Their()
th.value()
th.value('codekul', 56)