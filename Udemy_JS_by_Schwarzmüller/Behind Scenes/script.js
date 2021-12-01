"use strict"

function calcAge(birthYear) {
    let age = 2037 - birthYear

    function printAge() {
        let output = `You're ${age}, born in ${birthYear}`
        console.log(output)
    }
    if (birthYear >= 1983 && birthYear <= 1996) {
        let str = `Oh, and you're a millenial, ${firstName}`
        console.log(str)
    }
    printAge()
    return age
}

const firstName = "Nikita"
calcAge(1992)