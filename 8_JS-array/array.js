const numbers = [12, 11, 33, 13, 44, 51]
console.log(numbers)

console.log(numbers[1])

numbers[2] = 222
numbers[0] = 111

console.log(numbers)

const numsLength = numbers.length;
console.log(numsLength)

const ages = []
console.log(ages)





const players = ['Babar', 'Rizwan', 'Fakhar', 'Shaheen']
console.log(players)

console.log(players.includes('Babar'))

const includesPlayer = players.includes('Rizwan')
console.log(includesPlayer)

const includesPlayer2 = players.includes('Agha')
console.log(includesPlayer2)

console.log(players.indexOf('Rizwan'))

const findIndex = players.indexOf('Haris')
console.log(findIndex)

const checkArry = Array.isArray(players)
console.log(checkArry)

const user = { name: "Mohsin", age: 20 }
console.log(Array.isArray(user))





const fruites = ['Apple', 'Mango', 'Orange', 'Guava', 'Lychee']

console.log(fruites[2])

fruites[2] = 'Jambura'

console.log(fruites)






const touristPlace = ["Cox's-bazar", 'Sundarban', 'Bandarban']

touristPlace.push('Himchari')

touristPlace.push('Nilgiri', 'Jaflong')

touristPlace.pop()

console.log(touristPlace)





const arr1 = ['Ahad', 'Bilal', 'Wahaj', 'Danish']
const arr2 = ['Yumna', 'Dure', 'Dananeer', 'Sehar']

const concatArray = arr1.concat(arr2)
console.log(concatArray)





const original = [11, 13, 44, 15, 76, 33]
const copy = [...original]
copy[0] = 999
console.log(copy)
console.log(original)




const array2D = [
    [1, 2],
    [3, 4],
    [5, 6]
]
const updateRow = array2D[1][0] = 99
console.log(array2D)