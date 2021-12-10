function sumOfArray(array){
    let sum = 0;
    array.forEach(num => sum += num)
    return sum
}

module.exports = sumOfArray;