/*
This exercise will be a continuation of the previous exercise. 
Since you now know much more about how functions work in JavaScript, 
we will take the curry concept to a much higher level 
by supporting arbitrary numbers of arguments.
*/

var curry = function (fun) {
    if (typeof fun != "function") return
    var args = Array.prototype.slice.call(arguments)
    args.shift()
    var ret = function () {
        var nestedArgs = Array.prototype.slice.call(arguments)
        return fun.apply(this, args.concat(nestedArgs))
    }
    return ret
}

var fun = function () {
    return arguments.length;
}

var cur1 = curry(fun, 1, 2, 3)
console.log(cur1(4, 5, 6))

var cur2 = curry(fun, 1, 2, 3, 4, 5, 6)
console.log(cur2(9, 8, 7, 6, 5))