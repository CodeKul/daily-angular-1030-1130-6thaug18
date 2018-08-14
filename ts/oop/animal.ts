export class Animal implements GpsListener {
    legs: number
    wt: number
    nm: string

    run() {

    }

    walk() {

    }

    eat() {

    }

    locs() {
        return [0, 1]
    }
}

export interface GpsListener {
    locs(): number[]
}