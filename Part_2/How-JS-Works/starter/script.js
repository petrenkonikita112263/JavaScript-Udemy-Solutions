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

// retierment(1990);                // it's not the function declartion - it's expression

var retierment = function(year) {
    console.log(65 - (2020 - year));
}

retierment(1990);     

// variables

console.log(age);                   // undefined for variable
var age = 18;                       // this variable stores in Global Execution Context
console.log(age);


function foo2() {
    var age = 14;                   // this variable stores in variable execution object of function context
    console.log(age);
}

foo2();
console.log(age);


// Lecture: Scoping

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

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()                 // third function was called by second - thank to scoping
    }
}
// also second function has access to variable a and call first function

function third() {
    var d = 'John';
    // console.log(c);
    // can't access to variable c, execution stack is different
    // it's in different scope than second function

    console.log(a + d);         // -> Hello John
}


// Lecture: The this keyword
// this stores in execution context object
// default - window in the browser -> function call
// point to object that is calling the method -> method call

// console.log(this);              // -> the window object

// calculateAge(1995);
// function calculateAge(year) {
//     console.log(2020 - year);
//     console.log(this);          // refular function call
// }

var myObject = {
    name: 'Nobody',
    yearOfBirth: 10,
    calculateAge: function() {
        console.log(this);          // refers to object that called the method
        console.log(2020 - this.yearOfBirth);

        // function innerFunction() {
        //     console.log(this);      // window object
        //     // regular function calls happend that the window object displays
        // }
        // innerFunction();
    }
};

// myobject call calculateAge method
myObject.calculateAge();

var newObject = {
    name: 'Someone',
    yearOfBirth: 23
    // we can copy the method from myObject to calc age
    // but we can borrow this method
};

newObject.calculateAge = myObject.calculateAge;
newObject.calculateAge();
// as the result we'll see the same result as the older object
// but with new value