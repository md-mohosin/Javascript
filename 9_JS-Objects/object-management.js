const person5 = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
}
console.log(person5)

// ADD ANY VALUE**
Object.defineProperty(person5, "age",
    {
        value: 33, // set any value
        enumerable:true, // console/loop e dekhte caile
        configurable:true, // delete/redefiend korte caile
        writable:true // alue change korte caile.
    }
)
console.log(person5)


// CHANGE VALUE**
Object.defineProperty(person5,"language",{value:'BN'})
console.log(person5)

const propertyOfPerson5 = Object.getOwnPropertyNames(person5)
console.log(propertyOfPerson5)





// ************************GETTER AND SETTER
const user ={
    name:"Rahim",

    get userName(){
        return this.name
    },

    set userName(value){
         this.name = value
    }

}

console.log(user.userName)
user.userName ='Karim'
console.log(user.userName)