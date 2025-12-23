function display(value) {
    // console.log(value)
}

function calculate(n1, n2) {
    const result = n1 + n2
    display(result)
}
calculate(3, 4)







function displayer(value) {
    // console.log(value)
}

function calculator(num1, num2, callback) {
    const result = num1 * num2
    callback(result)
}
calculator(5, 6, displayer)





// console.log('Line-1')

setTimeout(function () {
    // console.log('Line-2')
}, 1000)

// console.log('Line-3')

function text4() {
    // console.log('Line-4')
}
setTimeout(text4, 3000)

setTimeout(() => {
    // console.log('text')
}, 2000)







const paymentSuccess = true;
const marks = 80;

function enroll(callback) {
    console.log('Course inrollment is in progress.')
    setTimeout(function () {
        if (paymentSuccess) {
            callback()
        }
        else {
            console.log('Payment failed!')
        }
    }, 2000)
}


function progress(callback) {
    console.log('Course in progress...')
    setTimeout(function () {
        if (marks >= 80) {
            callback()
        }
        else {
            console.log('You could not get enough marks to get the certificate')
        }
    }, 3000)
}



function getCertificate() {
    console.log('Preparing your certificate')
    setTimeout(function () {
        console.log('Congrats! you get the certificate')
    }, 1000)
}



enroll(function(){
    progress(getCertificate)
})