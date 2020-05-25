// Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

// This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
// John likes to tip 20% of the bill when the bill is less than $50, 15% 
// when the bill is between $50 and $200, and 10% if the bill is more than $200.

// Implement a tip calculator using objects and loops:
// 1. Create an object with an array for the bill values
// 2. Add a method to calculate the tip
// 3. This method should include a loop to iterate over all the paid bills and do the tip calculations
// 4. As an output, create 1) a new array containing all tips, and 2) 
// an array containing final paid amounts (bill + tip). 
// HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


// EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. 
// The bills were $77, $375, $110, and $45.
// Mark likes to tip 20% of the bill when the bill is less than $100, 
// 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

// 5. Implement the same functionality as before, this time using Mark's tipping rules
// 6. Create a function (not a method) to calculate the average of a given array of tips. 
// HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). 
// After you have the sum of the array, divide it by the number of elements in it 
// (that's how you calculate the average)
// 7. Calculate the average tip for each family
// 8. Log to the console which family paid the highest tips on averagevar

var johnFamily = {
    bill: [124, 48, 268, 180, 42],
    tip: [],
    finalBill: [],

    // method to calculate tip
    calculateTip: function() {

    // we should start with two empty arrays

        // this.bill will run first and then .length
        for (var i = 0; i < this.bill.length; i++) {
            var percentage;
            var temp = this.bill[i]
            if (temp < 50) {
                percentage = 0.2
            } else if ((temp > 50) && (temp < 200)) {
                percentage = 0.15
            } else {
                percentage = 0.1
            }

            // add result to the array
            this.tip.push(percentage * temp);
            // this.tip[i] = percentage * temp;
            this.finalBill.push(temp + percentage * temp);
            // this.finalBill = temp + percentage * temp;
        }
    }
}

var markFamily = {
    bill: [77, 375, 110, 45],
    calculateTip: function() {
        this.tip = [];
        this.finalBill = [];
        for (var i = 0; i < this.bill.length; i++) {
            var percentage;
            var temp = this.bill[i]
            if (temp < 100) {
                percentage = 0.2
            } else if ((temp > 100) && (temp < 300)) {
                percentage = 0.1
            } else {
                percentage = 0.25
            }
                this.tip.push(percentage * temp);
                this.finalBill.push(temp + percentage * temp);
        }
    }
}

function calculateAverageTip(tipArray) {
    var sumTip = 0;
    for (var i = 0; i < tipArray.length; i++) {
        sumTip += tipArray[i];
    }
    return sumTip / tipArray.length;
}

johnFamily.calculateTip();
markFamily.calculateTip();

console.log(johnFamily)
console.log(markFamily)

johnFamily.average = calculateAverageTip(johnFamily.tip);
markFamily.average = calculateAverageTip(markFamily.tip);
if (johnFamily.average > markFamily.average) {
    console.log("The John's Family have the highest bill to pay " + johnFamily.average + " $");
} else if (markFamily.average > johnFamily.average) {
    console.log("The Mark's Family have the highest bill to pay " + markFamily.average + " $");
} else {
    console.log("Both family have the same bill")
}

