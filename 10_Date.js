console.log(Date())

const today = new Date()
console.log(today)
console.log(today.getDay()) // index based day
console.log('today date',today.getDate())


const date = new Date('2062-12-9')
console.log(date.getDay())
console.log('month',date.getMonth()) //index based month
console.log('Date',date.getDate())
console.log(date.getFullYear())


const specificDate = new Date(2091,11,12)
console.log(specificDate)
console.log(specificDate.getDate())
console.log(specificDate.getMonth())
specificDate.setMonth(5)
console.log(specificDate)
console.log(specificDate.toDateString())
console.log(specificDate.toLocaleDateString())
console.log(specificDate.toLocaleString('en-gb'))


const d = new Date()
console.log(d.toString())
console.log(d.getDate())
console.log(d.getFullYear())

const da = new Date(2018, 15, 24, 10, 33, 30);
console.log(da.getMonth())
console.log(da.getHours())
console.log(da.getSeconds())