class Car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
}
const toyota = new Car('Toyota', 2024)
console.log(toyota)


class Product {
    country = 'Bangladesh'
    constructor(name) {
        this.name = name
    }
    speak(talk) {
        console.log(`Talking about ${talk}`)
    }
}
const lenovo = new Product('lenovo')
// console.log(lenovo)
// lenovo.speak('Mohsin')




class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    lecture() {
        console.log(`teac in ${this.subject}`)
    }
}
const sohag = new Teacher('Sohag', 'English')
console.log(sohag)

const pepol = new Teacher('Pepol', 'Bangla')
console.log(pepol)

sohag.lecture()
pepol.lecture()