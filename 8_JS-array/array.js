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
ages[0] = 20;
ages[1] = 44;
ages.push(55, 12, 32, 67)
console.log('ages', ages)



const players = ['Babar', 'Rizwan', 'Fakhar', 'Shaheen']
console.log(players)
console.log(players.at(1))

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




const cars = ["Saab", "Volvo", "BMW"];
console.log(cars.toString())
console.log(...cars)
console.log(cars.splice(1, 3))


const $fruites = ['Mango', 'banana', 'Jackfruite']

console.log($fruites.join(' * '))


const myArr = [[1, 2], [3, 4], [5, 6]];
console.log(myArr.flat())



const nums = [12, 34, 66, 33, 89]
console.log(Math.max(...nums))




const numbs1 = [11, 22, 33, 44, 55]
const numbs2 = [...numbs1];
numbs2.push(66)
console.log(numbs2)
console.log(numbs1)






const player = {
    name: 'Babar Azam',
    age: 31,
    birthPlace: 'Lahore',
    Role: 'Batsman'
}

const { name: pName, age, birthPlace, Role } = player
console.log(pName)
console.log(birthPlace)

const { name: Pname, ...others } = player
console.log(others)



const nums2 = [11, 22, 33, 44, 55, 66]
const result2 = nums2.map(n => n * 2)
console.log(result2)


const nums1 = [2, 4, 6, 8]
const result1 = nums1.map(n => n * n)
console.log(result1)


const friends = ['Ahad', 'Bilal', 'Wahaj', 'Dananeer']
const result3 = friends.map(f => f.length)
console.log(result3)


const result4 = nums1.forEach(n => console.log(n * 2))
console.log(result4)


const nums5 = [40, 50, 30, 85, 70, 93]
const result5 = nums5.filter(n => n > 50)
console.log(result5)

const result6 = nums5.filter(n => n % 2 === 0)
console.log(result6)

const result7 = nums5.find(n => n > 70)
console.log(result7)

const players1 = ['Babar', 'Rizwan', 'Fakhar', 'Shaheen', 'Haris']
const pResult1 = players1.filter(p => p.length > 5)
console.log(pResult1)
console.log(players1.indexOf('Fakhar'))
console.log(players1.indexOf('Imam'))  //=> If no element is found, it returns -1.



const sumArr = [1, 4, 7, 9, 11, 3]
const sumResult = sumArr.reduce((previous, current) => previous + current, 0)
console.log(sumResult)




const fruites2 = ['Mango', 'Apple', 'Banana', 'Orange']
console.log(fruites2)
console.log(fruites2.sort())

console.log(fruites2.reverse())


const months = ['December', 'Fabruary', 'January', 'March']
console.log(months.toSorted())




const numbs3 = [11, 44, 33, 99, 22, 66, 88]
console.log(numbs3)

const ascending = numbs3.sort(function (a, b) { return a - b })
console.log(ascending)

const descendingOrder = numbs3.toSorted(function (b, c) { return c - b })
console.log(descendingOrder)


const min = numbs3.reduce((a,b)=> a< b?a:b)
const max = numbs3.reduce((a,b)=> a> b?a:b)
console.log(min)
console.log(max)