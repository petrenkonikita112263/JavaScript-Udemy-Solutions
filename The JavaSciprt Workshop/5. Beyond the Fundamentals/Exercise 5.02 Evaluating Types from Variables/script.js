/*
In this exercise, we will create a function that outputs 
the type of whatever variable is passed to it
*/

var printType = function (val) {
    if (val == null) {
        console.log("Value is null")
        return
    } else {
        console.log("Value is", typeof (val))
    }
}

printType(12)
printType("I'm a String")
printType({})
printType(null)