// ****************************************JavaScript For Loop
for (let m = 0; m <= 8; m++) {
    console.log(`m ${m}`)
}


const cars = ["BMW", "Volvo", "Saab", "Ford"];

for (let car = 0; car < cars.length; car++) {
    console.log(cars[car])
}


let i = 1;
for (; i < 10; i++) {
    console.log(`i ${i}`)
    if (i === 4) {
        break
    }
}


for (const car of cars) {
    console.log('Brand new ' + car)
}







// ****************************************JavaScript While Loops
let n = 1
while (n < 15) {
    console.log('n' + n)
    n++
}


let f = 22;
do {
    console.log(`f ${f}`)
    f++
}
while (f < 30)



let k = 1;
while (k < 6) {
    k++
    if (k === 3) {
        continue
    }
    console.log(`k ${k}`)
}