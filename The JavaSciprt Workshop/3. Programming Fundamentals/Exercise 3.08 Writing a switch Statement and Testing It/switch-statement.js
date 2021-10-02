var keyNames = "WASDwasdIJKMijkm"
var keyName = keyNames.charAt(Math.floor(Math.random() * keyNames.length))

console.log("keyname ", keyName)

switch (keyName.toLowerCase()) {
    case "a":
        console.log("Move left")
        break
    case "s":
        console.log("Move right")
        break
    case "w":
        console.log("Move up")
        break
    case "d":
        console.log("Move down")
        break
    default:
        console.log("Invalid key")
        break
}
