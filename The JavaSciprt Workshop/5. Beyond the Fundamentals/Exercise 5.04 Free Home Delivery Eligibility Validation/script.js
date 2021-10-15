/*
In this exercise, we will create a function that will determine 
whether the customers of a grocery store are eligible for free home delivery. 
The store only delivers to customers who are located within 5 miles of the store. 
To make this exercise more interesting, the store recently decided 
to provide free delivery for customers located within 10 miles
of the store, but only if those customers have an active membership for their loyalty
program. Moreover, if customers are within 1 mile of the store, 
they aren't eligible for free home delivery, regardless of their membership status. 
*/

function isEligible(distance, membershipStatus) {
    if (distance < 1 || membershipStatus === "active" &&
        distance > 10 || membershipStatus === "inactive" && distance > 5) {
        return false
    }
    return true
}

console.log(isEligible(.5, "active"))
console.log(isEligible(7, "inactive"))
console.log(isEligible(7, "active"))