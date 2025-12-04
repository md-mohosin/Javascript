function tenTimes(num) {
    const result = num * 10;
    return result
}
const result = tenTimes(10)
console.log(result)

const result2 = tenTimes(70)
console.log(result2)



function half(num) {
    const result = `${num / 2} is half of ${num}`;
    return result
}
const halfResult = half(50)
console.log(halfResult)



function add(p1, p2) {
    return p1 + p2;
}
const addResult = add(20, 34)
console.log(addResult)



function doMath(num1, num2) {
    const sum = num1 + num2;
    const difference = num1 - num2;
    const quotient = num1 / num2;

    return { sum, difference, quotient }
}
const mathResult = doMath(36, 12)
console.log(mathResult)
console.log(mathResult.quotient)



function evenNumber(num) {
    if (num % 2 === 0) {
        return true
    }
    else {
        return false
    }
}
console.log(evenNumber(5))
console.log(evenNumber(8))



function evenSize(value) {
    if (value.length % 2 == 0) {
        return true
    }
    return false
}
console.log(evenSize('Khulna'))
console.log(evenSize('Dhaka'))



function sum(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum = num + sum
        console.log(num)
    }
    return sum
}
const numbers = [12, 45, 22, 54]
console.log(sum(numbers))



function evenNum(numbs) {
    const result = []
    for (const num of numbs) {
        if (num % 2 == 0) {
            result.push(num)
        }
    }
    return result
}
const nums = [22, 23, 24, 25, 26, 27, 28]
console.log('even number:', evenNum(nums))



function evenNumSum(nums) {
    let sum = 0;
    for (const num of nums) {
        if (num % 2 == 0) {
            sum += num
        }
    }
    return sum
}
const numbersA = [12, 13, 14, 15, 16]
console.log('even numbers sum :', evenNumSum(numbersA))



function count_zero(nums) {
    const zeros = []
    for (const zero of nums) {
        if (zero.includes('0')) {
            zeros.push(zero)
        }
    }
    return zeros.length
}
const zeroCountResult = '010101010101001'
console.log(count_zero(zeroCountResult))



function odd_even(num) {
    if (num % 2 == 0) {
        return 'Even'
    }
    return 'Odd'
}
console.log(odd_even(2))