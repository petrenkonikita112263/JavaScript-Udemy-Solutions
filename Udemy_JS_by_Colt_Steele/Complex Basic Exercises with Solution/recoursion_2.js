/*
We have defined a function named rangeOfNumbers with two parameters. 
The function should return an array of integers which begins with a number represented 
by the startNum parameter and ends with a number represented by the endNum parameter. 
The starting number will always be less than or equal to the ending number. 
Your function must use recursion by calling itself and not use loops of any kind. 
It should also work for cases where both startNum and endNum are the same.
*/

// Only change code below this line
function rangeOfNumbers(startNum, endNum) {
    if (startNum - endNum === 0) {
      return [startNum];
    } else {
      const numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
};
  // Only change code above this line
  
console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));
