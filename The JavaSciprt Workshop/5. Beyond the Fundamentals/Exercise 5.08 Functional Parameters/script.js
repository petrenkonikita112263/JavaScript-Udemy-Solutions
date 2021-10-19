/*
In this exercise, you will create a function that accepts two parameters: a primitive
data type and a function. 
This function will then combine those parameters and return a function as a result. 
The returned function will work identically to the function that
was passed as a parameter, with the exception that it will always receive the original
primitive parameter as its argument. 
*/
function curry(prim, fun) {
    if (typeof fun != "function") {
        return
    }
    var ret = function () {
        return fun(prim)
    }
    return ret
}

var fun = function (val) {
    return val + 50
}

var curry1 = curry(99, fun)
console.log(curry1())

var curry2 = curry("Bob", fun)
console.log(curry2())