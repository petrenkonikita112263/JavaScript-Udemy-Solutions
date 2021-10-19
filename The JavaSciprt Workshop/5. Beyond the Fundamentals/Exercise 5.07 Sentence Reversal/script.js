/*
In this exercise, you will create a function that accepts a string of any size, 
trims any whitespace characters, reverses its content, and then capitalizes 
the first character of the string or of those following a period character. 
The result should look like a normal sentence from a reversed dimension. 
The purpose of the exercise is to understand data transformation. 
Transforming data is ubiquitous in software development. 
The JavaScript runtime transforms data when it reads your code and converts it into a
running application. 
Being able to transform data in a simple manner will prove to be a valuable skill.
*/

function reverse(str) {
    str = String(str).trim()
    var result = "" // variable to hold the resulting value
    var index = str.length - 1 // variable to keep track of the current string index
    var chr = true // variable to store the current character
    var isStart = true // a variable to keep track of whether the next non-whitespace character is at the start of a sentence
    while (index >= 0) {
        chr = str[index]
        if (isStart && chr != " ") {
            chr = chr.toUpperCase()
            isStart = false
        } else {
            chr = chr.toLowerCase()
        }
        if (chr == ".") {
            isStart = true
            if (index == str.length - 1) {
                index--
                continue
            } else {
                result = result.substr(0, result.length - 1) + ". "
                index--
                continue
            }
        }
        result = result + chr
        index--
    }
    return result
}

reverse("This is the first sentence. This is the second.")