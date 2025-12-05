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



const isPassed = false
if (!isPassed) {
    console.log('You are failed')
}
else {
    console.log('You are passed')
}



const voterAge = 18;
const voterIdCard = false;

if (voterAge >= 18 || voterIdCard == true) {
    console.log('You can do vote')
}
else {
    console.log("You don't can't vote")
}



const user = true;
const logdIn = false;

if (user && logdIn) {
    console.log('You can')
}
else {
    console.log("You can't")
}



const marks = 70;

if (marks >= 90 && marks <= 100) {
    console.log('Grade A')
}
else if (marks >= 80 && marks <= 89) {
    console.log('Grade B')
}
else if (marks >= 70 && marks <= 79) {
    console.log('Grade C')
}
else if (marks >= 60 && marks <= 69) {
    console.log('Grade D')
}
else if (marks >= 0 && marks <= 59) {
    console.log('Grade F')
}
else {
    console.log('Invalid Grade')
}



const myScore = 85;
const friendScore = 90;

if (myScore > 80) {
    if (friendScore > 80) {
        console.log("Let's go for lunch.")
    }
    else if (friendScore >= 60 && friendScore < 80) {
        console.log('good luck next time')
    }
    else if (friendScore >= 40 && friendScore < 60) {
        console.log("I won’t see her messages.")
    }
    else {
        console.log('I blockd you')
    }
}
else {
    console.log("I will sleep now.")
}



const childrenAge = 10
const isStudents = true;
const seniorCitizensAge = 70;
const regularTicketPrice = 800;

if (childrenAge < 10) {
    console.log('Free ticket')
}
else if (isStudents) {
    const discount = regularTicketPrice * 50 / 100;
    console.log('Your ticket price is:', discount)
}
else if (seniorCitizensAge >= 60) {
    const discount = regularTicketPrice * 15 / 100;
    console.log('Your ticket price is:', discount)
}
else {
    console.log(regularTicketPrice)
}




// ****************************************JS condition ternary operator

const userAge = 18;
userAge >= 18 ? console.log('Adult') : console.log('child')


let admin = false;
admin ? console.log('He is admin') : console.log('He is customer')


const burgerPrice = 600;
burgerPrice > 500 ? console.log('Free cook') : console.log('Cooke: 30tk')



const num1 = 80;
const num2 = 70;
let result = 0;

num1 > num2 ? result = num1 * 2 : result = num1 + num2
console.log(result)



let cost = 500;
const leader = false;
cost = leader == true ? cost = 0 : cost + 100;
console.log(cost)


console.log(Boolean(1))
console.log(Boolean(''))