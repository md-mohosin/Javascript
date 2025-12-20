const nums = [11, 22, 33, 22, 44, 11]
const numbs = new Set([11, 22, 33, 22, 44, 11])
console.log(nums)
console.log(numbs)
console.log(typeof numbs)
console.log(numbs.has(22))
console.log(numbs.has(88))
console.log(numbs.has(66))

const num = 66
numbs.add(num)
console.log(numbs)
console.log(numbs.has(66))

const num2 = 33;
numbs.add(num2)
console.log(numbs)

console.log(numbs.size)


const A = new Set([1, 2, 3, 4])
const B = new Set([3, 4, 5, 6])

const union = new Set([...A, ...B])
console.log(union)

const intersection = [...A].filter(value => B.has(value))
console.log(intersection)

const diffrence = [...A].filter(value => !B.has(value))
console.log(diffrence)


const symmetricDifference = [...A].filter(value => !B.has(value))
    .concat
    ([...B].filter(value => !A.has(value)))
console.log(symmetricDifference)



const isSubset = [...A].every(value => B.has(value))
console.log(isSubset)
