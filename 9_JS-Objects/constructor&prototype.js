function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = 'Bangladeshi'
}
const person1 = new Person('md', 'Mohsin', 21, 'black')
console.log(person1)

const person2 = new Person('Ahad', 'Raza Mir', 31, 'black',)
person2.nationality = 'Pakistani'
console.log(person2)


Person.prototype.profession = 'Actor'

console.log(person2)
console.log(person2.profession)




function Person2(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

const person2_1 = new Person2('Bilal', 'Abbas Khan', 32, 'black')
console.log(person2_1)
console.log(person2_1.fullName())








function Person3(fName, lName, age) {
  this.fName = fName;
  this.lName = lName;
  this.age = age
}

const person3_1 = new Person3('Hamja', 'Sohail', 31)
console.log(person3_1)

Person3.prototype.name = function () {
  return `${this.fName} ${this.lName}`
}

console.log(person3_1.name())