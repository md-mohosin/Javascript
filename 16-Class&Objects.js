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




class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    move() {
        console.log('Gari cole na cole na')
    }
}



class Bus extends Vehicle {
    constructor(name, price, seat, tecketPrice) {
        super(name, price)
        this.seat = seat;
        this.tecketPrice = tecketPrice
    }
}




class Truck extends Vehicle {
    constructor(name, price, load) {
        super(name, price)
        this.load = load;
    }
}

const ashaTruck = new Truck('Asha',1500000,'2ton')
console.log(ashaTruck)