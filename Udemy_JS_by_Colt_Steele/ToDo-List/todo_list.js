var todos = [];

displayMenu();

function displayMenu() {
    var input = prompt("What'd you like to do?")
    while (input !== "quit") {
        if (input === "list") {
            listToDos();
        } else if (input === "new") {
            addToDo();
        } else if (input === "delete") {
            deleteToDo();
        }
        input = prompt("What'd you like to do?");
    }
    console.log("Ok, you quit the app");
}

function listToDos() {
    console.log("*************")
        todos.forEach(function(todo ,index) {
            console.log(index + ": " + todo);
        });
        console.log("*************")
}

function addToDo() {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("The element was added");
}

function deleteToDo() {
    var index = prompt("Enter index of todo to delete:");
    todos.splice(index, 1);
    console.log("The element was deleted");
}