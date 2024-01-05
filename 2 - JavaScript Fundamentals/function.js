// function sumTwoNumbers (num1 , num2) {
//     const sum = num1+num2;
//     return sum;
// }

// const sum1 = sumTwoNumbers(1,2)
// const sum2 = sumTwoNumbers(2,3)
// const sum3 = sumTwoNumbers(5,3)
// const sum4 = sumTwoNumbers(5,2)

// console.log(sum1,sum2,sum3,sum4)

//function can take other function as input - call back function
// function sum(num1 , num2 , functionToCall) {
//     const sumOfTwoNumber = num1 + num2;
//     functionToCall(sumOfTwoNumber);
// }
// function displayResult(result) {
//     console.log('The sum is '+ result);
// }
// function displayPassive(result) {
//     console.log("Sum's result is "+ result);
// }

// const ans = sum (1,2,displayResult);
// const ans2 = sum (1,2,displayPassive);

// function calculateArithemetic(a, b, aritheticFinalFunction) {
//   const ans = aritheticFinalFunction(a, b);
//   return ans;
// }

// function sum(a, b) {
//   return a + b;
// }

// const value = calculateArithemetic(1, 2, sum);
// console.log(value);

function findSum(n) {
  let sum = 0;
  for(let i = 0;i<n;i++) {
    
    sum += i;
  }
  return sum;
}

let ans = findSum(100)
let ans2 = findSum(200)

console.log(ans , ans2)
