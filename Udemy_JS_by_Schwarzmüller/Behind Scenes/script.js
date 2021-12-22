"use strict"

///////////////////////////////////////
// Scoping in Practice

function calcAge(birthYear) {
    let age = 2037 - birthYear

    function printAge() {
        let output = `You're ${age}, born in ${birthYear}`
        console.log(output)
    }
    if (birthYear >= 1983 && birthYear <= 1996) {
        let str = `Oh, and you're a millenial, ${firstName}`
        console.log(str)

        function add(a, b) {
            return a + b
        }
    }
    // console.log(add(2, 3))
    printAge()
    return age
}

const firstName = "Nikita"
calcAge(1992)

///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me)
console.log(myJob)
// console.log(year)

var me = "Nikita"
var myJob = "Ph. D Student"
const year = 1995

console.log(addDeclaration(2, 3))
// console.log(addExpresion(2, 3))
// console.log(addArrow(2, 3))

// Functions
function addDeclaration(a, b) {
    return a + b
}

const addExpresion = function (a, b) {
    return a + b
}

const addArrow = (a, b) => a + b

if (!numberProduct) {
    deleteShoppingCart()
}

var numberProduct = 10

function deleteShoppingCart() {
    console.log("All products deleted!")
}

///////////////////////////////////////
// The this Keyword in Practice
console.log(this)

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear)
    console.log(this)
}
calcAgeArrow(1980)

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this)
        console.log(2037 - this.year)
    },
}
jonas.calcAge()

const matilda = {
    year: 2017,
}

matilda.calcAge = jonas.calcAge
matilda.calcAge()

const f = jonas.calcAge
f()