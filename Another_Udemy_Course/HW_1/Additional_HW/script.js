var num = 33721;

var result = productOfNumbers(num);

function productOfNumbers(number) {
    var product = 1;
    while(number > 0) {
        var currentNumber = number % 10;
        product *= currentNumber;
        number = Math.floor(number / 10);
    }
    return product
}

console.log("You have this number " + num + " and the product of each digit in it = " + result);

alert("The result of product in power of 3 = " + Math.pow(result, 3));