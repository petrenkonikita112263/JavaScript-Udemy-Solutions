/*
In this exercise, you will create a function that accepts the components of an email
sending service and combines them into an email body template. To make things more
interesting, only adults are eligible to post comments on the website. 
Accordingly, the message text will change.
*/

function sendEmail(name, age, comments) {
    var age = Number(age)
    if (Number.isNaN(age) || typeof name != "string" ||
        typeof comments != "string") {
        return null
    }
    var body = `A user has posted a comment from a website:
    name: ${name}
    age: ${age}
    status:${(age < 18) ? `${name} is not a valid user` : `${name} is a valid user`}
    comments: ${comments}`
    return body
}

sendEmail("Jane", 27, "Your website is fantastic!")