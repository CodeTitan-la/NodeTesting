// // The only way to pass data is using exports and require.

// console.log("Hello World!");

// // Use "require" to grab a module that is loaded
// const cowsay = require("cowsay");
// console.log(cowsay.think({text: "Arby's is scary"}));



// const addTwoNumbers = require("./Js/math.js"); //Normally you would need to "require" from the other file
// console.log(addTwoNumbers(1,1))



// const multiplyTwoNumbers = require("./Js/math.js");
// console.log(multiplyTwoNumbers(2,4));

// //////////////////////////////////////////////

// const math = require("./Js/math.js")
// console.log(math.addThreeNumbers(5,5,5));



// console.log(dataFile.homeTown);
// console.log(dataFile.numbers); // Tested to make sure I could export from other files
// console.log(dataFile.string);


const dataFile = require("./data.js");
const sumOfArray = require("./sum.js");
console.log(sumOfArray(dataFile.numbers));


console.log(dataFile.numbers)
console.log(dataFile.string, dataFile.homeTown);


const lodash = require("lodash"); // Called lodash because it's a new package added

console.log(lodash.shuffle(dataFile.numbers)); //Logged lodash as the package and grabbed the shuffle method it has then passed my array of numbers to shuffle.
