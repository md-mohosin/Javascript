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

    if (!Array.isArray(numbers)) {
        return 'Give a valid array.'
    }

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





const allPhones = [
    { name: "Xiaomi", price: 22000, cemera: '12mp', color: 'Black' },
    { name: "Oppo", price: 11000, cemera: '12mp', color: 'Black' },
    { name: "Samsung", price: 34000, cemera: '12mp', color: 'Black' },
    { name: "iPhone", price: 99000, cemera: '12mp', color: 'Black' }
]


function getCheapest(phones) {
    let chipest = phones[0].price
    for (const phonePrice of phones) {
        if (chipest > phonePrice.price) {
            chipest = phonePrice.price
        }
    }
    return chipest;
}

const getCheapestPhone = getCheapest(allPhones)
console.log('cheapest phone price:', getCheapestPhone)








const products = [
    { name: 'T-shirt', price: 800 },
    { name: 'Pant', price: 900 },
    { name: 'Panjabi', price: 1000 },
    { name: 'Shoe', price: 2000 }
]

function getAllPrice(products) {
    let sum = 0;
    for (const product of products) {
        sum += product.price
    }
    return sum
}
const getPrice = getAllPrice(products)
console.log(getPrice)







const allBooks = [
    { name: 'Story books', price: 700, quantity: 3 },
    { name: 'Math books', price: 300, quantity: 1 },
    { name: 'Bangla books', price: 200, quantity: 2 },
    { name: 'Physics books', price: 900, quantity: 4 },
    { name: 'Islamic books', price: 500, quantity: 3 }
]

function getBooksPrice(books) {
    let total = 0;
    for (const book of books) {
        const totalPrice = book.price * book.quantity
        total += totalPrice
    }
    return total
}
const booksPrice = getBooksPrice(allBooks)
console.log(booksPrice)






const allDevices = [
    { id: 1, name: "iPhone 14", type: "Mobile", price: 120000, brand: "Apple" },
    { id: 2, name: "Galaxy S23", type: "Mobile", price: 110000, brand: "Samsung" },
    { id: 3, name: "HP Pavilion", type: "Laptop", price: 85000, brand: "HP" },
    { id: 4, name: "Dell XPS 13", type: "Laptop", price: 135000, brand: "Dell" },
    { id: 5, name: "iPad Pro", type: "Tablet", price: 95000, brand: "Apple" },
    { id: 6, name: "Apple Watch", type: "Smart Watch", price: 42000, brand: "Apple" },
    { id: 7, name: "JBL Charge 5", type: "Speaker", price: 18000, brand: "JBL" }
];

function getDevice(devices, search) {
    let matchedProduct = []
    for (const device of devices) {
        if (device.type.toLowerCase().includes(search.toLowerCase())) {
            matchedProduct.push(device)
        }
    }
    return matchedProduct
}

console.log(getDevice(allDevices, 'watch'))



function myFunction(a, b) {
    return arguments.length;
}

console.log(myFunction(3, 2))



function myFunction2(a, b) {
    return a * b;
}

let text = myFunction2.toString();
console.log(text)

console.log(this)


function thisFunc() {
    console.log(this)
}
thisFunc()


const arrowFuncThis = () => {
    console.log(this)
}
arrowFuncThis()



const myObj = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this;
    }
}
console.log(myObj.fullName());



(function () {
    let text = "Hello! I called myself.";
    console.log(text)
})();



(function (name) {
    console.log(`My name is ${name}`)
})('Mohsin');



((age) => {
    console.log(`MY age: ${age}`)
})(21)















const myNumbers = [4, 1, -20, -7, 5, 9, -6];

function removeNeg(numbers, callBack) {
    let mayArray = [];
    for (const n of numbers) {
        if (callBack(n)) {
            mayArray.push(n)
        }
    }
    return mayArray
}


const result = removeNeg(myNumbers, (n) => n >= 0)
console.log(result)