// Lecture: Hoisting
// function calculateAge(year) {
//     console.log(2020 - year);
// }

// // declare the function and call it

// calculateAge(1990);


// let's call the function before it's declaration
// this is hoisting
calculateAge(1965);

function calculateAge(year) {
    console.log(2020 - year);
}

// fo function expression

// retierment(1990);                // it's the function declartion - it's expression

var retierment = function(year) {
    console.log(65 - (2020 - year));
}

retierment(1990);     

// variables

console.log(age);                   // undefined for variable
var age = 18;
console.log(age);


function foo2() {
    var age = 14;
    console.log(age);
}

foo2();
console.log(age);

















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









