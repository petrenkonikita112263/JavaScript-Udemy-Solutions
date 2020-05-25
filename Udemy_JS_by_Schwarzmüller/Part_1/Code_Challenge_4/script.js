// Let's remember the first coding challenge where Mark and John compared their BMIs. 
// Let's now implement the same functionality with objects and methods.
// 1. For each of them, create an object with properties for their full name, mass, and height
// 2. Then, add a method to each object to calculate the BMI. 
// Save the BMI to the object and also return it from the method.
// 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. 
// Don't forget they might have the same BMI.
// Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

var johnObject = {
    fullName: "John",
    mass: 78,
    height: 1.76,
    calculateBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
}

var markObject = {
    fullName: "Mark",
    mass: 82,
    height: 1.65,
    calculateBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
}

if (johnObject.calculateBMI() > markObject.calculateBMI()) {
    console.log(johnObject.fullName + " has the highest BMI - " + johnObject.calculateBMI())
} else if (markObject.calculateBMI() > johnObject.calculateBMI()) {
    console.log(markObject.fullName + " has the highest BMI - " + markObject.calculateBMI())
} else {
    console.log(johnObject.fullName + " and " + markObject.fullName + " have the same BMI")
}
console.log(johnObject)
console.log(markObject)