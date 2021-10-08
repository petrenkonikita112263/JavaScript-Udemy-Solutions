var getRandomStringCharacter = function (source) {
    var returnCharacter = ""
    if (source != undefined && source.length > 0) {
        returnCharacter = source.charAt(Math.floor(Math.random() * source.length))
    }
    return returnCharacter
}

console.log('():', getRandomStringCharacter())
console.log('("AEIOU"):', getRandomStringCharacter('AEIOU'))
console.log('("JavaScript"):', getRandomStringCharacter('JavaScript'))
console.log('("124678"):', getRandomStringCharacter('124678'))
console.log('(124678):', getRandomStringCharacter(124678))
console.log('(true):', getRandomStringCharacter(true))