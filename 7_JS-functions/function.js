function noDuplicate(values) {
    const result =[]
    for (const value of values) {
        if(!result.includes(value)){
            result.push(value)
        }
    }
    return result
}

const numbers = [11, 23, 22, 11, 56, 23, 44, 51, 56]
console.log(noDuplicate(numbers))

const names = ['Ahad','Bilal','Ahad','Hamja','Wahaj','Bilal']
console.log(noDuplicate(names))

