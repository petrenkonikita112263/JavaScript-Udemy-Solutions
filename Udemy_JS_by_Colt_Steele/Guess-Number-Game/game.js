// 1. create secret number
var secretNumber = 4;

// 2. ask user for guess
var guess = Number(prompt("Guess a number"));

// 3. check guess
if (guess === secretNumber) {
    alert("you've got it right")
}
else if (guess > secretNumber) {
    alert("too high, guess again")
} else {
    alert("too low, guess again")
}


// Same loop's exercise that in annoy game folder but recoded using while
// 1. Print all numbers between -10 and 19
// var startNumber = -10;
// while(startNumber <= 19) {
//     console.log(startNumber);
//     startNumber++;
// }

// 2. Print all even numbers between 10 and 40
// var startNumber = 10;
// while(startNumber <= 40) {
//     if (startNumber % 2 === 0) {
//         console.log(startNumber);
//     }
//     startNumber++;
// }

// 3. Print all odd numbers between 300 and 333
// var startNumber = 300;
// while (startNumber <= 333) {
//     if (!(startNumber % 2 === 0)) {
//         console.log(startNumber);
//     }
//     startNumber++;
// }

// 4. Print all numbers divisible by 5 and 3 between 5 and 50
// var startNumber = 5
// while (startNumber <= 50) {
//     if ((startNumber % 5 === 0)
//         && (startNumber % 3 === 0)) {
//             console.log(startNumber)
//         }
//     startNumber++    
// }