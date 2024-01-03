/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

//good question - we handled the edge case which is , we removed all the special characters

function isPalindrome(str) {
  //normal string == reversed string = true -> pallindrome
  str = str.toLowerCase()
  function onlyLetter (string) {
    string.toLowerCase();
    return (string >= 'a' && string <= 'z');
  }

  let cleanString = ''
  for(let val of str) {
    if(onlyLetter(val)) {
      cleanString += val;
    }
  }

  const revString = cleanString.split('').reverse().join('');

  return cleanString === revString;
}

module.exports = isPalindrome;
