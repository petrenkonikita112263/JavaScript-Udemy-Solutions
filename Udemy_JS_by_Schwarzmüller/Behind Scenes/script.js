"use strict"

function calcAge(birthYear) {
    let age = 2037 - birthYear

    function printAge() {
        let output = `You're ${age}, born in ${birthYear}`
        console.log(output)
    }
    printAge()
    return age
}

const firstName = "Nikita"
calcAge(1992)