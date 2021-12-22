/*
Let's utilize all the information we have learned about in this chapter and see what we
have retained. For this activity, imagine that you are working with a team of developers
and your project is to create a stateful model that stores entries for a To-Do application.
The model will be a primary function, though other functions can be created and used
by it. The function will need to store one or more entries and will receive "actions" that
tell the state to change.
These actions will include the following:
• Create a new To-Do
• Remove a To-Do
• Modify a To-Do
Actions will be passed to the state with a given action keyword of either CREATE, REMOVE,
or MODIFY.
*/

"use strict"

var todos = []

function findIndex(state, id) {
    for (let index = 0; index < state.length; index++) {
        if (state[index].id === id) {
            return index
        }
    }
    return -1
}

function modelStateChange(state, action, data) {
    if (action === "CREATE") {
        data["createdAt"] = new Date()
        data["updatedAt"] = new Date()
        data["completed"] = false
        console.log(`Created new data: ${data}`)
        return state.concat(data)
    } else if (action === "REMOVE") {
        let itemIndex = findIndex(state, state.id)
        if (itemIndex > -1) {
            console.log(`Removed item: ${state[itemIndex]}`)
            delete state[itemIndex]
            return state
        }
    } else if (action === "MODIFY") {
        let itemIndex = findIndex(state, state.id)
        let modifyItem = state.splice(itemIndex, 1)
        modifyItem[0]["updatedAt"] = new Date()
        modifyItem[0]["completed"] = data.completed
        console.log(`Modified item: ${modifyItem[0]}`)
        state[itemIndex] = modifyItem[0]
        return state
    } else {
        console.log("Wrong action")
    }
}

todos = modelStateChange(todos, "CREATE", {
    id: 1,
    title: "Learn JS",
    description: "I will learn JS from Packtpub.com"
})

todos = modelStateChange(todos, "CREATE", {
    id: 2,
    title: "Learn Event",
    description: "I will learn JS Event from Packtpub.com"
})

todos = modelStateChange(todos, "MODIFY", {
    id: 2,
    completed: true
})

todos = modelStateChange(todos, "REMOVE", {
    id: "1"
})