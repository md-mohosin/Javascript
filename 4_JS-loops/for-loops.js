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



const numbers = [11, 22, 33, 44, 55]
for (const num of numbers) {
    console.log(num)
}



for (let num = 1; num < 61; num++) {
    console.log('I will invest at least 6 hrs every single day for next 60 days!"', num)
}



for (let num = 61; num <= 100; num++) {
    if (num % 2 != 0) {
        console.log('odd number: ', num)
    }
}

for (let num = 78; num <= 98; num++) {
    if (num % 2 == 0) {
        console.log('even number: ', num)
    }
}





let oddNumSum = 0;
for (let num = 91; num <= 129; num++) {
    if (num % 2 != 0) {
        oddNumSum = num + oddNumSum;
    }
}
console.log('odd numbr sum from 91 to 129 is', oddNumSum)


let evenNumSum = 0;
for (let num = 51; num <= 85; num++) {
    if (num % 2 == 0) {
        evenNumSum = num + evenNumSum;
    }
}
console.log('even numbr sum from 51 to 85 is', evenNumSum)




for (let i = 1; i <= 10; i++) {
    console.log(`9 x ${i} = ${i * 9}`)
}




for (let n = 81; n >= 65; n--) {
    console.log(n)
}
