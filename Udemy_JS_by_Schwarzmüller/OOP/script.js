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
