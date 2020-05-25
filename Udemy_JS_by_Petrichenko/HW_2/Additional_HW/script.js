var weekArray = ['Monday', 'Tuesday', 'Wednesday', 'Thirsday', 'Friday', 'Saturday', 'Sunday'];
console.log(weekArray);

var dayOfWeek = prompt("What's day is it today? Answer like Monday, Tuesday, etc." 
+ "If it's weekends - don't type anything, press enter");

for (var i = 0; i < weekArray.length; i++) {
    if ((weekArray[i].includes('Saturday')) || (weekArray[i].includes('Sunday'))) {   
        console.log(weekArray[i].bold());
    } else if (weekArray[i] === dayOfWeek) {
        console.log(weekArray[i].italics());
    } else {
        console.log(weekArray[i]);
    }
}

var arr = ['147957', '415321', '320750', '669150', '579617', '845317', '836180', '524914',
'186520', '206792', '7664', '751984', '700153', '333586'];
console.log(arr);

for (var i = 0; i < arr.length; i++) {
    if ((arr[i][0].includes('3')) || (arr[i][0].includes('7'))) {
        console.log(arr[i]);
    }
}