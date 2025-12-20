const fruites = new Map()

fruites.set('apple', 500)
fruites.set('banana', 200)

console.log(fruites)


const flowers = new Map([
    ['Rose', 100],
    ['Lily', 300],
    ['Sunflower', 200],
    ['Loutes', 100]

])
console.log(flowers)
const rose = flowers.get('Rose')
console.log(rose)

flowers.delete('Lily')
console.log(typeof flowers)
console.log(flowers.size)
console.log(flowers.has('Rose'))

flowers.forEach((value, key) => {
    console.log(value, key)
})

console.log(flowers.entries())
console.log(flowers.keys())
console.log(flowers.values())