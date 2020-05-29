/*
Use multiple conditional operators in the checkSign function to check if a number is positive, negative or zero. 
The function should return "positive", "negative" or "zero".
*/

// Only change code below this line
function checkSign(num) {
    return (num > 0) ? 'positive' 
    : (num < 0) ? 'negative'
    : 'zero';
  }
// Only change code above this line

console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));
  