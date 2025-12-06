let n = 1
while (n < 15) {
    console.log('n' + n)
    n++
}



let oddNum = 61;
while (oddNum <= 100) {
    if (oddNum % 2 != 0) {
        console.log('odd number:', oddNum)
    }
    oddNum++
}



let evenNum = 78;
while (evenNum <= 98) {
    if (evenNum % 2 == 0) {
        console.log('even number:', evenNum)
    }
    evenNum++
}



let k = 1;
while (k < 6) {
    k++
    if (k === 3) {
        continue
    }
    console.log(`k ${k}`)
}



let negNum = 21;
while(negNum >=15){
    console.log(negNum)
    negNum--
}



let f = 22;
do {
    console.log(`f ${f}`)
    f++
}
while (f < 30)