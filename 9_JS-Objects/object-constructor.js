function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality='Bangladeshi'
}
const person1 = new Person('md','Mohsin',21,'black')
console.log(person1)

const person2 = new Person('Ahad','Raza Mir',31,'black',)
person2.nationality='Pakistani'
console.log(person2)




function Person2(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

const person2_1 = new Person2('Bilal','Abbas Khan',32,'black')
console.log(person2_1)
console.log(person2_1.fullName())