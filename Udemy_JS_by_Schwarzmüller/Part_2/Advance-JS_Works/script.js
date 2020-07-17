var julian = {
    name: 'Julian',
    yearOfBirth: 1978,
    job: 'CIO'
}

// function constructor - pattern
var Person = function(name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
}

// add inheritance, prototype - that's the property
// method doesn;t belong to constructor, but we can use it
Person.prototype.calculateAge = function() { console.log(2020 - this.yearOfBirth) }

// same thing but with property instead of method
Person.prototype.lastName = 'Smith'

// create new object
var julian = new Person('Julian', 1978, 'CIO')
var jane = new Person('Jane', 1969, 'Designer')
var mark = new Person('Mark', 1948, "Retired")

console.log(julian)
console.log(julian.lastName)
julian.calculateAge()
console.log(jane.lastName)
jane.calculateAge()
console.log(mark.lastName)
mark.calculateAge()

// my function-constructor
var AudioBook = function (groupName, authorSurname, authorName,
    publishYear, language, genre, publisher, duration, audioCodec, bitrate) {
        this.groupName = groupName
        this.authorSurname = authorSurname
        this.authorName = authorName
        this.publishYear = publishYear
        this.language = language
        this.genre = genre
        this.publisher = publisher
        this.duration = duration
        this.audioCodec = audioCodec
        this.bitrate = bitrate
}

AudioBook.prototype.performer = 'George Guidall, Frank Muller, Stephen King'

var fantasyBook = new AudioBook('Полиглоты', 'King', 'Stephen', '2003-2004, 2012', 'English',
'Fantasy, Fiction, Horror, Western', 'Simon & Schuster Audio, Pengiun Audio', 145, 'MP3', 96)

console.log(fantasyBook)
console.log(fantasyBook.performer)


// Object.create
var personProto = {
    calculateAge: function() { console.log(2020 - this.yearOfBirth) }
}

var john = Object.create(personProto)
john.name = 'John'
john.yearOfBirth = 1990
john.job = 'Teacher'
console.log(john)

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'Designer' }
})
console.log(jane)