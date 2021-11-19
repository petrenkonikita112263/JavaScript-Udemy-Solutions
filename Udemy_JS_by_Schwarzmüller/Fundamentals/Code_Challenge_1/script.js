// test if js file connects to html page
// alert("CONNECTION SUCCESFUL")

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
// BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs
// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
// 4. Print a string to the console containing the variable from step 3. 
// (Something like "Is Mark's BMI higher than John's? true"). 

var weight_1 = prompt("Please enter the Mark's weight (kg): ")
var height_1 = prompt("Please enter the Mark's heigh (m): ")
alert("Now do the same thing but for John")
var weight_2 = prompt("Please enter the John's weight (kg): ")
var height_2 = prompt("Please enter the John's heigh (m): ")

var bmi_1 = weight_1 / height_1**2
var bmi_2 = weight_2 / height_2**2

var compareUnit = bmi_1 > bmi_2

alert('Is Mark\'s BMI higher than John\'s? ' + compareUnit)