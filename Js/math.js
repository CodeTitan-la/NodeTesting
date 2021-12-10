//Create function to export
function addTwoNumbers(num1, num2){
    return num1 + num2;
    
}
//Make sure the module can export
module.exports = addTwoNumbers;




function multiplyTwoNumbers(num1,num2){
    return num1 * num2
}


let total = 2;


module.exports = multiplyTwoNumbers;

////////////////////////////////////////////////////////////////
// You can list them out one by one or make it an "object"

function addThreeNumbers(num1, num2, num3){
    return num1 + num2 + num2
}

//the "addThreeNumbers" before the "=" is the name we're giving the value so we can call it like an object in another file"
module.exports.addThreeNumbers = addThreeNumbers;

// OR LIKE THIS


module.exports = {
    addThreeNumbers: addThreeNumbers,
    total: total
}