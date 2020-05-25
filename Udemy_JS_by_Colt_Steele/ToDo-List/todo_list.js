var todos = ["Buy New Turtle"];

var input = prompt("What'd you like to do?")

while (input !== "quit") {
    // handle input
    if (input === "list") {
        listToDos();
    } else if (input === "new") {
        addToDo();
    } else if (input === "delete") {
        deleteToDo();
    }
    // ask again for new input
    input = prompt("What'd you like to do?");
}
console.log("Ok, you quit the app");

function listToDos() {
    console.log("*************")
        todos.forEach(function(todo ,index) {
            console.log(index + ": " + todo);
        });
        console.log("*************")
}

function addToDo() {
    // ask for new todo
    var newTodo = prompt("Enter new todo");
    // add todos to array
    todos.push(newTodo);
    console.log("The element was added");
}

function deleteToDo() {
    // ask for index of todo to be deleted
    var index = prompt("Enter index of todo to delete:");
    // delete that todo
    // spilce()
    todos.splice(index, 1);
    console.log("The element was deleted");
}