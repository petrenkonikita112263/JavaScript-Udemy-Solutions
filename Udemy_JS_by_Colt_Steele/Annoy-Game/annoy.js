var answer = prompt("Are we there yet?")

while ((answer !== 'yes') && (answer !== 'yeah')
&& (answer.indexOf('yes') === -1)) {
    var answer = prompt("Are we there yet?")
}

alert("YAY, we made it")


// For Loops exercises (uncommented it and checked out the result into console)
// 1. Print all numbers between -10 and 19
// var startNumber = -10;
// for (i = 0; startNumber <= 19; startNumber++) {
//     console.log(startNumber);
// }

// 2. Print all even numbers between 10 and 40
// var startNumber = 10;
// for (i  = 0; startNumber <= 40; startNumber++) {
//     if (startNumber % 2 === 0)
//     console.log(startNumber);
// }

// 3. Print all odd numbers between 300 and 333
// var startNumber = 300;
// for (i = 0; startNumber <= 333; startNumber++) {
//     if (!(startNumber % 2 === 0))
//     console.log(startNumber);
//     }

// 4. Print all numbers divisible by 5 and 3 between 5 and 50
// var startNumber = 5
// for (i = 0; startNumber <= 50; startNumber++) {
//     if ((startNumber % 5 === 0)
//         && (startNumber % 3 === 0)) {
//             console.log(startNumber)
//         } 
// }