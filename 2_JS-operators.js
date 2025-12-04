// ****************************************Arithmetic Operators

const a = 8;
const b = 5;

const result1 = a + b; /*additon*/
console.log(result1)

const result2 = a - b; /* subtruction */
console.log(result2)

const result3 = a * b; /* multiplication */
console.log(result3)

const result4 = a / b; /* division */
console.log(result4)

const result5 = a % b; /* modulus/remainder */
console.log(result5)



//  Exponentiation 
const result6 = a ** 2;
console.log(result6)

const result7 = Math.pow(a, 2)
console.log(result7)



// Incrementing
let c = 5;
c++
console.log(c)
c += 3
console.log(c)



// Decrementing
let d = 6;
d--
console.log(d)
d -= 4
console.log(d)


// Operator Precedence
let x = 100 + 60 * 3;
console.log(x)

const y = 90 - 50 + 3;
console.log(y)

const z = 50 + 60 / 10;
console.log(z)








// ****************************************JavaScript Assignment Operators
let f = 10;
f += 5; //Addition assignment operator
console.log(f)

let user = 'Ahad'
user += ' Raza'
console.log(user)

let g = 8;
g -= 3; // Subtruction assignment operator
console.log(g)

let h = 10;
h *= 2; //Multiplication assignment operator
console.log(h)

let j = 6;
j **= 2;
console.log(j)

let k = 9;
k /= 3; //Division assignment operator
console.log(k)

let l = 11;
l %= 5; //Reminder assignment operator
console.log(l)


let admin = false
admin && console.log('admin') // logical AND operator
admin || console.log('user') //logical OR operator



let customer = null;
customer ?? console.log('customer') // nullish coalescing operator 


const nums = [1, 2, 4]
const newNums = [...nums, 6, 7] //spreed operators
console.log(newNums)









// ****************************************Comparison Operators
const n = 8;
const v = '8';

// The double equals (==) checks only the value.Not the data type
if (n == v) {
    console.log('Value is same')
}
else {
    console.log("Value isn't same")
}


// The triple equals (===) checks both the value and the type
if (n === v) {
    console.log('Value is same')
}
else {
    console.log("Value isn't same")
}




// Not equal
if (n != v) {
    console.log(true)
}
else {
    console.log(false)
}


if (n !== v) {
    console.log(true)
}
else {
    console.log(false)
}




console.log(5 > 5)
console.log(5 < 5)

console.log(4 >= 4)
console.log(4 <= 3)


console.log(8 > '12')

console.log(2 < 'mir')

console.log(6 == 'km')




const appleCost = 45;
const mangoCost = 50;
const totalCost = appleCost + mangoCost;
const givenMoney = 100;

const shoopKeeperReturn = givenMoney - totalCost;
console.log(shoopKeeperReturn)



const Mathematics = 80;
const Biology = 93;
const Chemistry = 70;
const Physics = 90;
const Bangla = 85;

const totalNum = Mathematics + Biology + Chemistry + Physics + Bangla;
const totalSub = 5;

const avgMarks = totalNum / totalSub;
console.log(parseFloat(avgMarks.toFixed(2)))
