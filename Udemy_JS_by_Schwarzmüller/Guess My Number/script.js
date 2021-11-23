"use strict"

// console.log(document.querySelector(".message").textContent)
// document.querySelector(".message").textContent = "🎉 Correct Number"
// console.log(document.querySelector(".message").textContent)

// document.querySelector(".number").textContent = 13
// document.querySelector(".score").textContent = 13

// document.querySelector(".guess").value = 13

var secretNumber = Math.trunc(Math.random() * 20) + 1
var score = 20

document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value)
    if (!guess) {
        document.querySelector(".message").textContent = "❌ No Number"
    } else if (guess === secretNumber) {
        document.querySelector(".number").textContent = secretNumber
        document.querySelector(".message").textContent = "🎉 Correct Number"
        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".number").style.width = "30rem"
    } else if (guess > secretNumber) {
        if (score >= 1) {
            document.querySelector(".message").textContent = "📈 Too High!"
            score--
            document.querySelector(".score").textContent = score
        } else {
            document.querySelector(".message").textContent = "🥺 You Lose!"
        }
    } else if (guess < secretNumber) {
        if (score >= 1) {
            document.querySelector(".message").textContent = "📉 Too Low!"
            score--
            document.querySelector(".score").textContent = score
        } else {
            document.querySelector(".message").textContent = "🥺 You Lose!"
        }
    }
})

document.querySelector(".again").addEventListener("click", function () {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector(".score").textContent = score
    document.querySelector(".number").textContent = "?"
    document.querySelector(".message").textContent = "Start guessing..."
    document.querySelector(".guess").value = ""
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").style.width = "15rem"
})