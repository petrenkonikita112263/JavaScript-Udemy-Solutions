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

///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(nikita.__proto__)
// Object.prototype (top of prototype chain)
console.log(nikita.__proto__.__proto__)
console.log(nikita.__proto__.__proto__.__proto__)
console.dir(Person.prototype.constructor)

const arr = [3, 6, 4, 5, 6, 9, 3, 9, 6, 3, 4, 5]
console.log(arr.__proto__)
console.log(arr.__proto__ === Array.prototype)

Array.prototype.unique = function () {
    return [...new Set(this)]
}
console.log(arr.unique())

const h1 = document.queryCommandValue("h1")
console.dir(x => x + 1)

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
const Car = function (make, speed) {
    this.make = make
    this.speed = speed
}

Car.prototype.accelerate = function () {
    this.speed += 10
    console.log(`${this.make} going at ${this.speed} km/h`)
}

Car.prototype.brake = function () {
    this.speed -= 5
    console.log(`${this.make} going at ${this.speed} km/h`)
}

const car1 = new Car("BMW", 120)
const car2 = new Car("Mercedes", 95)
car1.accelerate()
car1.brake()
car1.accelerate()
car2.brake()
car2.accelerate()
car2.accelerate()