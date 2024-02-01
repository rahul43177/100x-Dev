/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largestNumber = -100;
    for(let i = 0;i<numbers.length;i++) {
     if(numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}
console.log(`Largest number is ${findLargestElement([33,7,2,9,11])}`)
module.exports = findLargestElement;
