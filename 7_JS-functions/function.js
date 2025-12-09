function noDuplicate(values) {
    const result = []
    for (const value of values) {
        if (!result.includes(value)) {
            result.push(value)
        }
    }
    return result
}

const numbers = [11, 23, 22, 11, 56, 23, 44, 51, 56]
console.log(noDuplicate(numbers))

const names = ['Ahad', 'Bilal', 'Ahad', 'Hamja', 'Wahaj', 'Bilal']
console.log(noDuplicate(names))





function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32    // The formula to convert Celsius to Fahrenheit.
    return fahrenheit
}
const celsius = celsiusToFahrenheit(4)
console.log(celsius)





const numbs = [10, 34, 88, 34, 99, 20, 44, 61]

const maxNum = Math.max(...numbs)
console.log(maxNum)

const minNum = Math.min(...numbs)
console.log(minNum)




const nums = [2000, 1000, 900, 300, 9000, 4000]

function getMinNum(numbers) {
    let min = nums[0]
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min
}

const min = getMinNum(nums)
console.log(min)





const phones = [
    { name: "Xiaomi", price: 22000, cemera: '12mp', color: 'Black' },
    { name: "Xiaomi", price: 22000, cemera: '12mp', color: 'Black' },
    { name: "Xiaomi", price: 22000, cemera: '12mp', color: 'Black' },
    { name: "Xiaomi", price: 22000, cemera: '12mp', color: 'Black' }
]

function getCheapest(phones) {
    for (const phone of phones) {
        console.log(phone)
    }
}
getCheapest(phones)







const products = [
    { name: 'T-shirt', price: 800 },
    { name: 'Pant', price: 900 },
    { name: 'Panjabi', price: 1000 },
    { name: 'Shoe', price: 2000 }
]

function getAllPrice(products) {
    let sum = 0;
    for (const product of products) {
        // const price = product.price;
        sum +=product.price
    }
    return sum
}
const getPrice = getAllPrice(products)
console.log(getPrice)
