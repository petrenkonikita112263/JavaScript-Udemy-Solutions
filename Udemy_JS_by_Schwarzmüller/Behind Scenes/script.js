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
// console.log(me)
console.log(myJob)
// console.log(year)

// var me = "Nikita"
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

const addArrowFunction = (a, b) => a + b

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
// f()

///////////////////////////////////////
// Regular Functions vs. Arrow Functions

const newJonas = {
    firstName: "Jonas",
    year: 1991,
    calcAge: function () {
        console.log(2037 - this.year)

        // old solution 1
        // const self = this // self or that
        // const isMellenium = function () {
        //     console.log(self)
        //     console.log(self.year >= 1981 && self.year <= 1996)
        // }
        // isMellenium()

        // solution 2
        const isMellenium = () => {
            console.log(this)
            console.log(this.year >= 1981 && this.year <= 1996)
        }
        isMellenium()
    },
    greet: () => console.log(`Hey ${this.firstName}`)
}
newJonas.greet()
newJonas.calcAge()

// arguments keyword exist only in regular function (not in arrow)
const addExpr = function (a, b) {
    console.log(arguments)
    return a + b
}
addExpr(2, 5)
addExpr(2, 5, 8, 12)

var addArrow = (a, b) => {
    console.log(arguments)
    return a + b
}
// addArrow(2, 5, 8)

///////////////////////////////////////
// Objects vs. primitives
let age = 30
let oldAge = age
age = 31

console.log(age)
console.log(oldAge)

const me = {
    name: "Nikita",
    age: 26
}
const friend = me
friend.age = 27
console.log(me)
console.log(friend)