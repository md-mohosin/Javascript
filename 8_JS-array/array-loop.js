const colors = ['red', 'blue', 'green', 'yellow', 'orange']

let revers_colors = []
for (const color of colors) {
    revers_colors.unshift(color)
}
console.log(revers_colors)




const numbers = [12, 98, 5, 41, 23, 78, 46];
for (const num of numbers) {
    if (num % 2 == 0) {
        console.log(num)
    }
}




const texts = ['Tom', 'Tim', 'Tin', 'Tik']
let result = ''
for (const text of texts) {
    // console.log(text.split(',').join(' '))
    result += text
}
console.log(result)




const statement = 'I am a hard working person'
const words = statement.split(' ')
const reverse_words = (words.reverse().join(' '))
console.log(reverse_words)






const arry = [11, 12, 13, 14, 15, 16]

let oddNumSum = 0;
let oddNum = 0
for (const num of arry) {
    if (num % 2 !== 0) {
        oddNum ++
        oddNumSum += num
    }
}
console.log(oddNumSum / oddNum)