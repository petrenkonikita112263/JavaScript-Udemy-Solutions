"use strict"

///////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
}

// how it works
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const nikita = new Person("Nikita", 1995)
console.log(nikita)

const matilda = new Person("Matilda", 2017)
const jack = new Person("Jack", 1975)
console.log(matilda, jack)

console.log(nikita instanceof Person)

///////////////////////////////////////
// Prototypes
console.log(Person.prototype)

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear)
}

nikita.calcAge()
matilda.calcAge()
jack.calcAge()

console.log(nikita.__proto__)
console.log(nikita.__proto__ === Person.prototype)
console.log(Person.prototype.isPrototypeOf(nikita))
console.log(Person.prototype.isPrototypeOf(Person))

// .prototyeOfLinkedObjects
Person.prototype.species = "Homo Sapiens"
console.log(nikita.species, matilda.species)
console.log(nikita.hasOwnProperty("firstName"))
console.log(nikita.hasOwnProperty("species"))