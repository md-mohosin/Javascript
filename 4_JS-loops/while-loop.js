let n = 1
while (n < 15) {
    console.log('n' + n)
    n++
}


let k = 1;
while (k < 6) {
    k++
    if (k === 3) {
        continue
    }
    console.log(`k ${k}`)
}




let f = 22;
do {
    console.log(`f ${f}`)
    f++
}
while (f < 30)