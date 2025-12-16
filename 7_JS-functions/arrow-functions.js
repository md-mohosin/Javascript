const add = function (a, b) {
    return a + b
}
console.log(add(4, 5))


const sum = (a, b) => {
    return a + b;
}
console.log(sum(5, 6))



const diffrence = (a, b) => a - b;
console.log(diffrence(10, 5))



const myltiply = (a, b) => {
    return a * b
}
const result = myltiply(4, 3)
console.log(result)



const personDetails = (person) => person.age

const person = { name: "Ahad", age: 32 }
console.log('age', personDetails(person))



const addition = num => num * num
console.log(addition(5, 5))



const getPI = () => Math.PI
console.log(getPI())



const isEven = (num) => {
    if (num % 2 === 0) {
        console.log(`${num} is even number`)
    }
    else {
        console.log(`${num} is odd number`)
    }
}
isEven(4)