const person = {
    name: "Ahad",
    profession: "Actor",
    age: 30,
    sallery: 30000
}
console.log(person)
console.log(person.name)  //dot notation
console.log(person['profession']) //bracket notation

const personSallery = person.sallery;
console.log(personSallery)

person.name = 'Bilal'
person['age'] = 32
console.log(person.name)
console.log(person)





const computer = {
    brand: "HP",
    model: "Pavilion",
    specs: {
        processor: {
            generation: "13th Gen",
            baseClock: "3.2 GHz",
            turboClock: "4.7 GHz",
        },
        storage: {
            type: "SSD",
            size: "1TB",
        }
    },
    accessories: ["Mouse", "Keyboard", "Headphone"]
};

console.log(computer)

console.log(Object.keys(computer))
console.log(Object.values(computer))

console.log(computer.brand)

console.log(computer?.specs.processor)

const computerStorage = computer.specs?.storage
console.log(computerStorage)

console.log(computer.accessories[1])

delete computer.brand
console.log(computer)







const mobile = {
    brand: "Samsung",
    model: "Galaxy A55",
    price: 45000,
    color: "Black",
    storage: "128GB",
    features: ["Fingerprint", "5G", "Fast Charging"], // array allowed
};
console.log(mobile)

for (const prop in mobile) {
    console.log(prop, '-', mobile[prop])
    console.log()
}






const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors["golden rod"])




const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car['passenger capacity'] = 5
console.log(car)






let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
const studentProperty = Object.keys(student)
const studentPropertyLength = studentProperty.length;
console.log(studentPropertyLength)




let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};
for (const key in myObject) {
    console.log(`Key: ${key} | type: ${typeof myObject[key]}`)
}





const personDetails = {
    name: "John",
    age: 30,
    city: "New York"
};
const myArray = Object.values(personDetails);
let text = myArray.toString();
console.log(text)
const text2 = JSON.stringify(personDetails)
console.log(text2)


console.log(Object.entries(personDetails))
console.log(Object.entries(personDetails)[0])

for (const [key, value] of Object.entries(personDetails)) {
    console.log(key, value)
    console.log(`${key} : ${value}`)
}

const numsArr = [11, 22, 33,]
const [x, y, z] = numsArr;
console.log(y)




const person2 = {
    firstName: "John",
    lastName: "Doe"
};
const man = Object.create(person2);
console.log(man.firstName = "Peter");



const fruites = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
]
console.log(fruites)
const fruitsObj = Object.fromEntries(fruites)
console.log(fruitsObj)



const person3={
firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
}
console.log(person3)
const person4 = {firstName:'Stiven',lastName:'angi'}
Object.assign(person3,person4)
console.log(person3)