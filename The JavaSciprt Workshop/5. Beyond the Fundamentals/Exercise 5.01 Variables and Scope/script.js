const i = 10
console.log(i)

const f = function () {
    var i = 20
    console.log(i)
}

f()
console.log(i)

if (true) {
    let i = 15
    console.log(i)
}
console.log(i)


i = 10
if (true) {
    var i = 15
    console.log(i)
}
console.log(i)