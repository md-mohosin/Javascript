const text = 'asdfjklqwertyuiop'

console.log(text.length)  // STRING LENGTH

console.log(text.charAt(1))  // charAt(index)

console.log(text.charCodeAt(0))  //charCodeAt(index)

console.log(text[2])



// String concat
const fName = 'Bilal'
const lName = 'Abbas'

const concatFullName = fName.concat(" ", lName, ' ', 'Khan')
const fullName = fName + ' ' + lName;
console.log(concatFullName)
console.log(fullName)



// String slice
const word = 'javascript'
const sliceWord = word.slice(1, 4)
console.log(sliceWord)


const text1 = 'programming'
const sliceText1 = text1.slice(4)
console.log(sliceText1)


const text2 = 'Tailwind'
const sliceText2 = text2.slice(-5)
console.log(sliceText2)



// JavaScript String substring, substr
const dev = 'Development'

console.log(dev.substring(1, 4))

console.log(dev.substr(0, 5))

console.log(dev.substr(4))

console.log(dev.substr(-4))

console.log(dev.substring(4))

console.log(dev.substring(-4))



// JavaScript String toUpperCase, toLowerCase
const userName = 'AHAD'
const customerName = 'raja'
const adminName = 'Asif'

console.log(userName.toLowerCase())
console.log(customerName.toUpperCase())
console.log(adminName.toLowerCase())



const sentence = '   Hello world    '
console.log(sentence.trim())// JavaScript String trim()

console.log(sentence.trimStart()) //JavaScript String trimstart

console.log(sentence.trimEnd()) //JavaScript String trimEnd



const js = 'JS'
console.log(js.padEnd(5, '*'))  // JavaScript String padEnd()
console.log(js.padStart(4, '-')) //JavaScript String padStart()



const welcome = 'Welcome! '
console.log(welcome.repeat(3)) //JavaScript String repeat()


// Replacing String Content
const actor = 'Asif raza mir'
console.log(actor.replace('Asif', 'Ahad'))


const actress = 'sehar khan'
console.log(actress.replace(/SEHAR/i, 'Ramsha'))


const text5 = "more and more people want to learn more every day."
console.log(text5.replace(/more/g, 'extra'))

console.log(text5.replace('more', 'extra'))
console.log(text5.replaceAll('more', 'extra'))



// JavaScript String split()
const sentence2 = 'I love Programming'
console.log(sentence2.split(" "))

const fruits = 'apple,mango,orange,'
const splitFruits = fruits.split(',')
console.log(splitFruits)



const text3 = 'Where are you fro?'
console.log(text3.indexOf('are'))
console.log(text3.lastIndexOf('are'))



// JavaScript String match()
const text4 = "The rain in SPAIN stays mainly in the plain";
console.log(text4.match('in'))
console.log(text4.match(/in/g))
console.log(text4.match(/in/gi))


const text6 = "The cats were playing in the garden while other cats watched from the fence."
console.log([...text6.matchAll(/cats/g)])


const text7 = 'Hello world cup'
console.log(text7.includes('Hello'))
console.log(text7.includes('world', 8))


console.log(text7.startsWith('Hello'))
console.log(text7.endsWith('cup'))



const sentence3 = 'I am learning web dev'
let reverse = ''
for (const letter of sentence3) {
    reverse = letter + reverse
}
console.log(reverse)

const reversSentence3 = sentence3.split('').reverse()
const reversSentence4 = sentence3.split('').reverse().join('')
console.log(reversSentence3)
console.log(reversSentence4)





const sentence4 = 'I am learning Programming'

const countA = []
for (const letter of sentence4) {
    if (letter == 'a') {
        countA.push(letter)
    }
}
console.log(countA.length)




const sentence5 = "Aaa! Aarav asked Alina about a new car."

let count_a_A = 0;
for (const letter of sentence5) {
    if (letter == 'a' || letter == 'A') {
        count_a_A++;
    }
}
console.log(count_a_A)




const sentence6 = "A curious idea can evolve quickly."
for(const letter of sentence6){
    if(letter == "a e i o u"){
        console.log(true)
    }
}




let str = "xX Hello xX World";

str = str.replace(/x/g, "y");  // replace all x → y
str = str.replace(/X/g, "Y");  // replace all X → Y

console.log(str);




const string1 =  "We are the so-called \"Vikings\" from the north.";
const string2 =  'It\'s alright.';