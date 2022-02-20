const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`)
    }
}

const greeterHey = greet("Hey")
greeterHey("Jonas")
greeterHey("Steven")

greet("Hello")("Jonas")

const greetArrow = (greeting) =>
    function (name) {
        console.log(`${greeting} ${name}`)
    }

greetArrow("Hello")("Jonas")
