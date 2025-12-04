function vatKhaw() {
    console.log('Hand wash kore aso')
    console.log('boso')
    console.log('Plate e khabar naw')
}
vatKhaw()



function square(num) {
    console.log(num * num)
}
square(4)
square(5)



const cubeNum = 5
function cube(num) {
    console.log(`${num} cube = ${num * num * num}`)
}
cube(3)
cube(4)
cube(cubeNum)



function power(num, power) {
    console.log(Math.pow(num, power))
    console.log('--------------------------------')
    console.log(num ** power)
    console.log('--------------------------------')
}
power(4, 2)
power(5, 3)
power(4, 4)



function sum(num1, num2, num3) {
    const sum = num1 + num2 + num3
    console.log(sum)
}
sum(4, 3, 5)
sum(10, 3, 12)



function diffrence(num1, num2) {
    const diffrence = num1 - num2
    console.log(num1, 'and', num2, 'diffrence is', diffrence)
}
const fatherAge = 65;
const myAge = 21
diffrence(fatherAge, myAge)



function multiply(num1, num2, num3, num4) {
    return num1 * num2 * num3 * num4
}
const result = multiply(2, 3, 4, 5)
console.log(result)



function multiplyOrDivide(num) {
    if (num % 2 !== 0) {
        return num * 2
    }
    else {
        return num / 2
    }
}
console.log(multiplyOrDivide(5))



function make_avg(nums) {
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    const avg = sum / nums.length;
    return avg
}
const nums = [12, 33, 14, 34, 11]
console.log(make_avg(nums))