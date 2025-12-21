const person = {
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = {
    firstName :'Jhon',
    lastName :'Doe'
}
const person2 = {
     firstName :'Stive',
    lastName :'smith'
}

const resPers1 = person.fullName.call(person1)
console.log(resPers1)
const resPers2 = person.fullName.call(person2)
console.log(resPers2)






const player = {
    getRole:function(country){
        return `${this.pName} is a ${this.role} and his Country is ${country}`
    }
}

const player1 = {
    pName:'Babar Azam',
    role:'Batter'
}
const player2 ={
    pName:"Muhammad Rizwan",
    role:"Wk-Batter"
}

console.log(player.getRole.call(player1,'Pakistan'))
