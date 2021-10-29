/*
In this exercise, you will create a function within an object that provides 
a "pretty print" facility when using the object in circumstances that require 
a string value. The function will utilize the toString capability
*/

var obj = {
    meaningOfLife: 42,
    foo: "bar",
    child: {
        me: "you",
        other: {
            him: "her"
        }
    },
    toString: Object.prototype.toString
}

var str = obj + ""
console.log(str)

var objToString = function (obj, indent) {
    obj = obj || this
    indent = indent || ""
    var res = ""
    for (var k in obj) {
        if (typeof obj[k] == "object") {
            res += indent + k + " = {\n"
            res += objToString(obj[k], indent + "- ")
            res += indent + "}"
        } else if (typeof obj[k] != "function") {
            res += indent + k + " = " + obj[k]
        } else {
            continue
        }
        res += "\n"
    }
    return res
}

obj.toString = objToString;
obj + ""