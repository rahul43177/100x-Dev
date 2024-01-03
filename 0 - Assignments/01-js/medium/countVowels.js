//done - solved
/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str = str.toLowerCase()
    let count = 0;
    for(let val of str) {
      if(val == 'a' || val == 'e' || val == 'i' || val == 'o' || val == 'u') {
        count++;
      }
    }
    return count;
}

module.exports = countVowels;