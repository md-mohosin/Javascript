const success = true;

const promise = new Promise(function (resolve, reject) {
    if (success) {
        resolve("I'm successfull")
    }
    else {
        reject("Failed")
    }
})


promise
    .then(value => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })








const paymentSuccess = true;
const marks = 80;

function enroll() {
    console.log("Course inrollment is in progress.")
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (paymentSuccess) {
                resolve()
            }
            else {
                reject()
            }
        }, 2000)
    })
    return promise
}

function progress() {
    console.log('Course in progress...')
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                resolve()
            }
            else {
                reject('You could not get enough marks to get the certificate')
            }
        }, 3000)
    })
    return promise
}


function getSertificate() {
    console.log('Preparing your certificate')
    // const promise = Promise.resolve(console.log('Congrats! you get the certificate'))
    const promise = new Promise(function (resolve) {
        setTimeout(function () {
           resolve(console.log('Congrats! you get the certificate'))
            
        }, 1000)
    })
    return promise
}


enroll()
    .then(progress)
    .then(getSertificate)
    .catch((error) => { console.log(error) })