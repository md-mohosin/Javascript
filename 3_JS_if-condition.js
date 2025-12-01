// ****************************************JS if-else condition

const num = 100;
if (num < 200) {
    console.log('Num is short')
}



const age = 17;

if (age >= 18) {
    console.log('You will be able to vote')
}
else {
    console.log('You will not be able to vote')
}




const price = 200;

if (price >= 500) {
    console.log('You can eat biriyani')
}
else if (price > 400) {
    console.log('You can eat tehari')
}
else if (price >= 300) {
    console.log('You can eat khicuri')
}
else {
    console.log('You can eat only rice !')
}








// ****************************************JS condition ternary operator

const userAge = 18;
userAge >= 18 ? console.log('Adult') : console.log('child')


let admin = false;
admin ? console.log('He is admin'):console.log('He is customer')


console.log(Boolean(1))
console.log(Boolean(''))