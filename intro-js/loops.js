let nms = [
    'Android',
    'Apple',
    'Windows',
    'Symbian'
]
console.log(`Name at 0th ${nms[0]}`)
for(let i = 0; i < nms.length; i++) {
    console.log(`i => ${i} value => ${nms[i]}`)
}

let cntr = 0
while(true) {
    if(cntr >= nms.length) break
    console.log(`Value is ${nms[cntr]}`)
    cntr++
}