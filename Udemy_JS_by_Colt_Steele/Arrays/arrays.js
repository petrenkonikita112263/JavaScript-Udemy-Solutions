// reverse array
function printReverse(arr) {
    for (let index = arr.length - 1; index >= 0; index--) {
        console.log(arr[index]);
    }
}

printReverse([3, 6, 2, 5])

// isUniform()
function isUniform(arr) {
    var first = arr[0]
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] !== first) {
            return false;
        }
    }
    return true;
}

isUniform([1, 1, 1, 1]);
isUniform(['a', 'b', 'p']);
isUniform(['b', 'b', 'b']);

// sum of array
function sumArray(arr) {
    var total = 0;
    arr.forEach(element => {
        total += element;
    });
    return total;
}

sumArray([10, 3, 10, 4]);

// max of array
function max(arr) {
    var max = arr[0]
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] > max) {
        max = arr[index];
        }
    }
    return max;
}

max([10, 3, 10, 4]);