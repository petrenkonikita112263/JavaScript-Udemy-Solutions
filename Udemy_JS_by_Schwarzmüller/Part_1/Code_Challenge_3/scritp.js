// alert("Hello")

// John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

// To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
// He likes to tip 20% of the bill when the bill is less than $50, 
// 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

// In the end, John would like to have 2 arrays:
// 1) Containing all three tips (one for each bill)
// 2) Containing all three final paid amounts (bill + tip).

// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

var billList = [124, 48, 268];

function calculateTip(bill) {
    var percentage;
    if (bill < 50) {
        percentage = 0.2
    } else if ((bill > 50) && (bill < 200)) {
        percentage = 0.15
    } else {
        percentage = 0.1
    }
    return percentage * bill;
}

function calculatePaySum(bill, tip) {
    var sumToPay = bill + tip;
    return sumToPay;
}

var billList = [124, 48, 268];
var tipList = new Array();

for (index = 0; index < billList.length; index++) {
    var tip;
    tip = calculateTip(billList[index])
    tipList.push(tip)
}

var resultSum = calculatePaySum(billList[0], tipList[0]) +
calculatePaySum(billList[1], tipList[1]) + calculatePaySum(billList[2], tipList[2])
console.log("For fist bill the tip is " + tipList[0] + ", for second - " + tipList[1]
+ " and for last - " + tipList[2])
console.log(calculatePaySum(billList[0], tipList[0]) + ", " + calculatePaySum(billList[1], tipList[1])
+ ", " + calculatePaySum(billList[2], tipList[2]))
console.log("The final sum to pay is " + resultSum)