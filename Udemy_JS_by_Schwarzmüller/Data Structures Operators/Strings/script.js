"use strict"

///////////////////////////////////////
// Working With Strings - Part 1

const airline = "TAP Air Portugal"
const plane = "A320"

console.log(plane[0])
console.log(plane[1])
console.log("B737"[0])

console.log(airline.length)
console.log("B737".length)

console.log(airline.indexOf("r"))
console.log(airline.lastIndexOf("r"))
console.log(airline.indexOf("Portugal"))

console.log(airline.slice(4))
console.log(airline.slice(4, 7))

console.log(airline.slice(0, airline.indexOf(" ")))
console.log(airline.slice(airline.lastIndexOf(" ") + 1))

console.log(airline.slice(-2))
console.log(airline.slice(1, -1))

const checkMiddleSeat = function(seat) {
    // B and E are middle seats
    const s = seat.slice(-1)
    if (s === "B" || s === "E") {
        console.log("You got the middle seat 😬")
    } else {
        console.log("You got lucky 😎")
    }
}

checkMiddleSeat("11B")
checkMiddleSeat("23C")
checkMiddleSeat("3E")

console.log(new String("jonas"))
console.log(typeof new String("jonas"))
console.log(typeof new String("jonas").slice(1))

///////////////////////////////////////
// Working With Strings - Part 2

console.log(airline.toLowerCase())
console.log(airline.toUpperCase())

// Fix capitalization in name
const passenger = "jOnAS"
const passengerLower = passenger.toLowerCase()
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect)

// Comparing emails
const email = "hello@jonas.io"
const loginEmail = "  Hello@Jonas.Io \n"

// const lowerEmail = loginEmail.toLowerCase()
// const trimmedEmail = lowerEmail.trim()
const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail)
console.log(email === normalizedEmail)

// replacing
const priceGB = "288,97£"
const priceUS = priceGB.replace("£", "$").replace(",", ".")
console.log(priceUS)

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!"

console.log(announcement.replace("door", "gate"))
// console.log(announcement.replaceAll("door", "gate"))
console.log(announcement.replace(/door/g, "gate"))

// Booleans
console.log(plane.includes("A320"))
console.log(plane.includes("Boeing"))
console.log(plane.startsWith("Airb"))

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW ARirbus family")
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase()
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board")
  } else {
    console.log("Welcome aboard!")
  }
}

checkBaggage("I have a laptop, some Food and a pocket Knife")
checkBaggage("Socks and camera")
checkBaggage("Got some snacks and a gun for protection")