const person = {
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = {
    firstName: 'Jhon',
    lastName: 'Doe'
}
const person2 = {
    firstName: 'Stive',
    lastName: 'smith'
}

const resPers1 = person.fullName.call(person1)
console.log(resPers1)





const actor = {
    getActor: function (drama) {
        return `${this.aName} from ${drama}`
    }
}

const actor1 = {
    aName : 'Bilal Abbas Khan'
}

console.log(actor.getActor.apply(actor1,['Isq Murshid']))






const player = {
    getRole: function (city, country) {
        return `${this.pName} is a ${this.role} from ${city} , ${country}`
    }
}

const player1 = {
    pName: 'Babar Azam',
    role: 'Batter'
}
const player2 = {
    pName: "Muhammad Rizwan",
    role: "Wk-Batter"
}

console.log(player.getRole.apply(player1, ['Lahore', 'Pakistan']))