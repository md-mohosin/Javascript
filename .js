let a = 7;
let b = 5;
console.log(a, b)
const temp = a;

// a=b
// b=a

a = b;
b = temp
console.log(a, b)




let x = 1;
let y = 2;
console.log(x, y);

[x, y] = [y, x]; //distructuring
console.log(x, y)