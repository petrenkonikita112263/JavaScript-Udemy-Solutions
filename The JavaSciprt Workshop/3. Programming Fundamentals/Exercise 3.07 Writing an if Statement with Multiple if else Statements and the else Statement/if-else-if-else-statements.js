var target = Math.floor(Math.random() * 21) + 1
var player = Math.floor(Math.random() * 21) + 1
var lucky = Math.floor(Math.random() * 21) + 1
var unlucky = Math.floor(Math.random() * 21) + 1
var wallet = player * 20

console.log("Target score: ", target)
console.log("Player score: ", player)
console.log("Lucky score: ", lucky)
console.log("Unlucky score: ", unlucky)
console.log("Player initial wallet: ", wallet)

if (player == lucky && lucky != unlucky) {
    console.log("Player wins: matches lucky score.")
    wallet += (lucky + player) * 10
} else if (lucky != unlucky && player == unlucky){
    console.log("Player loses: matches unlucky score.")
    wallet = 0
} else if (player == target) {
    console.log("Player wins: ties target ", target)
    wallet += (21 - target) * 10
} else if (player > target) {
    console.log("Player wins: beats target by ", (player - target))
    wallet += (player - target) * 10
} else {
    console.log("Player loses: misses target by ", (target - player))
    wallet = Math.max(0, wallet - (target - player) * 10)
}

console.log("Player final wallet:", wallet)