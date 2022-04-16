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
console.dir((x) => x + 1)

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

///////////////////////////////////////
// ES6 Classes
class PersonClass {
    constructor(fullName, birthYear) {
        this.fullName = fullName
        this.birthYear = birthYear
    }

    get age() {
        return 2037 - this.birthYear
    }

    get fullName() {
        return this._fullName
    }

    // Set a property that already exists
    set fullName(name) {
        if (name.includes(" ")) {
            this._fullName = name
        } else {
            alert(`${name} is not a full name!`)
        }
    }

    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear)
    }

    greet() {
        console.log(`Hey ${this.fullName}`)
    }

    // Static method
    static hey() {
        console.log("Hey there 👋")
        console.log(this)
    }
}

const jessica = new PersonClass("Jessica Davis", 1996)
console.log(jessica)
jessica.calcAge()
console.log(jessica.__proto__ === PersonClass.prototype)
console.log(jessica.age)
PersonClass.hey()

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const account = {
    owner: "jonas",
    movements: [200, 530, 120, 300],
    get latest() {
        return this.movements.slice(-1).pop()
    },
    set latest(mov) {
        this.movements.push(mov)
    },
}
console.log(account.latest)
account.latest = 50
console.log(account.movements)

///////////////////////////////////////
// Object.create
const PersonPrototype = {
    calcAge() {
        console.log(2037 - this.birthYear)
    },

    init(firstName, birthYear) {
        this.firstName = firstName
        this.birthYear = birthYear
    },
}

const steven = Object.create(PersonPrototype)
console.log(steven)
steven.name = "Steven"
steven.birthYear = 2002
steven.calcAge()
console.log(steven.__proto__ === PersonPrototype)
const sarah = Object.create(PersonPrototype)
sarah.init("Sarah", 1979)
sarah.calcAge()

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarClass {
    constructor(make, speed) {
        this.make = make
        this.speed = speed
    }

    get speedUS() {
        return this.speed / 1.6
    }

    set speedUS(speedValue) {
        this.speed = speedValue * 1.6
    }

    accelerate() {
        this.speed += 10
        console.log(`${this.make} going at ${this.speed} km/h`)
    }

    brake() {
        this.speed -= 5
        console.log(`${this.make} going at ${this.speed} km/h`)
    }
}

const ford = new CarClass("Ford", 120)
console.log(ford.speedUS)
ford.speedUS = 25
console.log(ford)
console.log(ford.speedUS)
ford.accelerate()
ford.brake()
ford.brake()

///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions
const AnotherPerson = function (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
}

AnotherPerson.prototype.calcAge = function () {
    console.log(2037 - this.birthYear)
}

const Student = function (firstName, birthYear, course) {
    AnotherPerson.call(this, firstName, birthYear)
    this.course = course
}

// Linking prototypes
Student.prototype = Object.create(AnotherPerson.prototype)

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const mike = new Student("Mike", 2020, "Computer Science")
mike.introduce()
mike.calcAge()

console.log(mike.__proto__)
console.log(mike.__proto__.__proto__)

console.log(mike instanceof Student)
console.log(mike instanceof AnotherPerson)
console.log(mike instanceof Object)

Student.prototype.constructor = Student
console.dir(Student.prototype.constructor)

///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes
class StudentClass extends PersonClass {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear)
        this.course = course
    }

    introduce = function () {
        console.log(`My name is ${this.fullName} and I study ${this.course}`)
    }

    calcAge() {
        console.log(
            `I'm ${
                2037 - this.birthYear
            } years old, but as a student I feel more like ${
                2037 - this.birthYear + 10
            }`
        )
    }
}

const martha = new StudentClass("Martha Jones", 2012, "Computer Science")
martha.introduce()
martha.calcAge()

///////////////////////////////////////
// Inheritance Between "Classes": Object.create
const StudentPrototype = Object.create(PersonPrototype)
StudentPrototype.init = function (firstName, birthYear, course) {
    PersonPrototype.init.call(this, firstName, birthYear)
    this.course = course
}
StudentPrototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}
const jay = Object.create(StudentPrototype)
jay.init("Jay", 2010, "Computer Science")
jay.introduce()
jay.calcAge()

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
const EV = function (make, speed, charge) {
    Car.call(this, make, speed)
    this.charge = charge
}

EV.prototype = Object.create(Car.prototype)
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo
}
EV.prototype.accelerate = function () {
    this.speed += 20
    this.charge -= 1
    console.log(
        `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
    )
}

const tesla = new EV("Tesla", 100, 0)
tesla.chargeBattery(22)
tesla.accelerate()

class Account {
    #movements = []
    #pin

    constructor(owner, currency, pin) {
        this.owner = owner
        this.currency = currency
        this.#pin = pin
        this.locale = navigator.language
        console.log(`Thanks for opening an account ${owner}`)
    }

    getMovements() {
        return this._movements
    }

    deposit(val) {
        this.#movements.push(val)
        return this
    }

    withdraw(val) {
        this.deposit(-val)
        return this
    }

    #approveLoan(val) {
        return true
    }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val)
            console.log("Loan approved")
            return this
        }
    }
}

const acc1 = new Account("Jonas", "EUR", 1111)
acc1.deposit(250)
acc1.withdraw(140)
acc1.requestLoan(1000)
console.log(acc1)

// chaining
acc1.deposit(300).deposit(300).withdraw(35).requestLoan(25000).withdraw(4000)
console.log(acc1.getMovements())
