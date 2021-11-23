"use strict"

var secretNumber = Math.trunc(Math.random() * 20) + 1
var score = 20
var highScore = 0

function displayMessage(message) {
    document.querySelector(".message").textContent = message
}

document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value)
    if (!guess) {
        displayMessage("❌ No Number")
    } else if (guess === secretNumber) {
        document.querySelector(".number").textContent = secretNumber
        displayMessage("🎉 Correct Number")
        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".number").style.width = "30rem"
        if (score > highScore) {
            highScore = score
            document.querySelector(".highscore").textContent = highScore
        }
    } else if (guess !== secretNumber) {
        if (score >= 1) {
            displayMessage(
                guess > secretNumber ? "📈 Too High!" : "📉 Too Low!"
            )
            score--
            document.querySelector(".score").textContent = score
        } else {
            displayMessage("🥺 You Lose!")
        }
    }
})

document.querySelector(".again").addEventListener("click", function () {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector(".score").textContent = score
    document.querySelector(".number").textContent = "?"
    displayMessage("Start guessing...")
    document.querySelector(".guess").value = ""
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").style.width = "15rem"
})