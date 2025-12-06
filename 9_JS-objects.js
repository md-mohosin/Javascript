const person = {
    name: "Ahad",
    profession: "Actress",
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