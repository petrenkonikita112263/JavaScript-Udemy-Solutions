/*
A lot has been covered so far, so it's time for an activity.
In this activity, you have been tasked with writing a function that 
will receive the grades for a student's coursework for an entire year as percentages. 
The function must average the result of each grade in order 
to determine whether the student has passed the course for the entire year. 
The calculation will assume the following:
• An average below 35% is an F grade.
• An average of 35 – 44% is a D grade.
• An average of 45% – 59% is a C grade.
• An average of 60% – 74% is a B grade.
• An average of 75% and over is an A grade.

Grades for each coursework assignment may be passed as a Number or a String. No
other data type is expected, so error handling is not necessary.

The high-level steps for the activity are as follows:
1. Create a function. Argument labels aren't necessary as we won't know how many
arguments there will be.
2. Extract the arguments for the function.
3. Get the number of arguments that were passed and store it as a variable.
4. Add all the arguments together and calculate the average. Store this in a variable.
5. Determine the grade from the student based on the average and return it.
*/

function calculateAverageGrade() {
    var args = Array.prototype.slice.call(arguments)
    var sum = 0
    for (let index = 0; index < args.length; index++) {
        sum += Number(args[index])
    }
    return sum / args.length
}

function determineGrade(average) {
    if (average < 35) {
        console.log("Student average grade is F")
    } else if (average >= 35 && average < 44) {
        console.log("Student average grade is D")
    } else if (average >= 45 && average < 59) {
        console.log("Student average grade is C")
    } else if (average >= 60 && average < 74) {
        console.log("Student average grade is B")
    } else if (average > 75) {
        console.log("Student average grade is A")
    } else {
        alert("none")
    }
}

var studentAverage1 = calculateAverageGrade(28, 95, 51, 38, 44, 40, 55, 62, 54, 25)
console.log(studentAverage1)
determineGrade(studentAverage1)