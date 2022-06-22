"use strict"

const lotteryPromise = new Promise(function (resolve, reject) {
    console.log("Lotter draw is happening 🔮")
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve("You WIN 💰")
        } else {
            reject(new Error("You lost your money"))
        }
    }, 2000)
})

lotteryPromise
    .then((response) => console.log(response))
    .catch((error) => console.error(error))

// Promisifying setTimeout
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000)
    })
}
