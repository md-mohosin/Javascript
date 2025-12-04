console.log(0.2 + 0.1)

console.log('20' + '10')

console.log(20 + '10')

console.log(20 - '10')

console.log('20' - '10')


console.log(10 + 'mango')
console.log(10 - 'mango') // NaN => Not a Number

console.log('--------')
console.log((200).toString(3))


const deciNum = 10.5378
console.log(deciNum.toFixed(0))
console.log(deciNum.toFixed(3))
console.log(deciNum.toPrecision(4))


const strNum = '10.5'
const strNum2 = '12.4s'
const convertNum = Number(strNum)
console.log(strNum)
console.log(convertNum)

console.log(typeof strNum, typeof convertNum)

console.log(parseInt(deciNum))
console.log(parseFloat(strNum))
console.log(parseFloat(strNum2))

console.log(Number('abid'))
console.log(Number('20'))

console.log(Number.isFinite(strNum))

console.log(Number.isNaN(strNum2))
console.log(isNaN(strNum2))

console.log(Number.isSafeInteger(strNum))
console.log(Number.isSafeInteger(10))

console.log(2**4)