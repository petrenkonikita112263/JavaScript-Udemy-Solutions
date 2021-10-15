// Declare and initialize the todo list array
var todoList = [
	"Wash Laundry",
	"Clean Silver",
	"Write Letters",
	"Purchase Groceries",
	"Retrieve Mail",
	"Prepare Dinner",
]

////////////////////////// JQUERY ///////////////////////
// Declare and initialize variable for the todo list element
// var todoListElement = $("#todo-list")

// function replaceListItems(listElement, listOfItems) {
// 	listElement.hide()
// 	listElement.empty()
// 	for (let i = 0; i < listOfItems.length; i++) {
// 		let liElement = $(document.createElement("li"))
// 		liElement.append(document.createTextNode(listOfItems[i]))
// 		listElement.append(liElement)
// 	}
// 	listElement.fadeIn("slow")
// }

////////////////////////// VELOCITY ///////////////////////
// Declare and initialize variable for the todo list element
// var todoListElement = document.getElementById("todo-list")

// function replaceListItems(listElement, listOfItems) {
// 	Velocity(listElement, {
// 		opacity: 0
// 	}, {
// 		duration: 0
// 	})
// 	listElement.innerHTML = ""
// 	for (let i = 0; i < listOfItems.length; i++) {
// 		let liElement = document.createElement("li")
// 		liElement.appendChild(document.createTextNode(listOfItems[i]))
// 		listElement.appendChild(liElement)
// 	}
// 	Velocity(listElement, {
// 		opacity: 1
// 	}, {
// 		duration: 400
// 	})
// }

////////////////////////// ANIMEJS ///////////////////////
// Declare and initialize variable for the todo list element
var todoListElement = document.getElementById("todo-list")

function replaceListItems(listElement, listOfItems) {
	anime({
		targets: listElement,
		translateX: -1000
	})
	listElement.innerHTML = ""
	for (let i = 0; i < listOfItems.length; i++) {
		let liElement = document.createElement("li")
		liElement.appendChild(document.createTextNode(listOfItems[i]))
		listElement.appendChild(liElement)
	}
	setTimeout(() => {
		anime({
			targets: listElement,
			translateX: 0
		})
	}, 500)
}

// Declare and initialize variable for shuffle button element.
var shuffleButtonElement = document.getElementById("shuffle-button")

// Add event listener function for the shuffle button element.
shuffleButtonElement.addEventListener("click", clickShuffleButton)

// Function to replace an HTML DOM list li elements with array items.

/**
 * Shuffles array elements
 * @param {array} sourceArray - Array to be shuffled.
 * @return {array} - New array with shuffled items
 */
function getNewShuffledArray(sourceArray) {
	// Make a copy of the sourceArray
	var newArray = [].concat(sourceArray)
	// The index for making a swap starting with last
	let swapIndex = newArray.length
	// The index to make a swap with swapIndex
	let swapWithIndex
	// Copy of the swapIndex value being swapped
	let swapIndexValue
	// Loop while swapIndex is not 0
	while (0 !== swapIndex) {
		// Pick an index to swap with current index from 0 to current swapIndex
		swapWithIndex = Math.floor(Math.random() * swapIndex)
		// Reduce swapIndex by 1
		swapIndex -= 1
		// Make copy of the swapIndex value.
		swapIndexValue = newArray[swapIndex]
		// Replace swapIndex value with swapWithIndex value.
		newArray[swapIndex] = newArray[swapWithIndex]
		// Replace swapWithIndex value with temporaryValue value.
		newArray[swapWithIndex] = swapIndexValue
	}
	return newArray
}

// Function to handle click events for the Shuffle button
function clickShuffleButton() {
	replaceListItems(todoListElement, getNewShuffledArray(todoList))
}

// Update the todo list view with initial list of items
replaceListItems(todoListElement, todoList)