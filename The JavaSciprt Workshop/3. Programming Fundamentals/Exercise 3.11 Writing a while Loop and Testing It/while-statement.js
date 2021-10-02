let iterations = 0
let die

while (iterations < 10) {
    die = Math.floor(Math.random() * 6) + 1
    if (die % 2 == 0) {
    break
    }
    iterations ++
}

console.log("Number of iterations: ", iterations + 1);
console.log("Die value: ", die);