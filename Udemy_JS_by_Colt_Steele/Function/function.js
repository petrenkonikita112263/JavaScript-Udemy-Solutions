// is Even
function isEven(num) {
    return num % 2 === 0;
}

// factorial
function factorial(num) {
    // define a result variable
    var result = 1;
    // calculate factorial and store value in result
    for(var i = 2; i <= 1; i++) {
        result *= i;
    }
    // return the result
    return result;
}

// kebabToSnake
function kebabToSnake(str) {
    // replace all '-' with '_' and return str
    var newStr = str.replace(/-/g, "_");
    return newStr;
}