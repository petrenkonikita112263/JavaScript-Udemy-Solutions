/*
In this exercise, we will process a series of numbers and output messages describing
whether a number is either odd or even.
*/

function odd_or_even(counter, last) {
    while (counter <= last) {
        if (counter % 2 == 0) {
            console.log(counter, "is an even number")
        } else {
            console.log(counter, "is an odd number")
        }
        counter += 1
    }
}

odd_or_even(1, 5)