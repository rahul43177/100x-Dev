function findSum() {
  const num1 = document.querySelector("#firstNumber")
  console.log(num1)
  console.log(num1.value)
  console.log(`number 2 ---> ${num2} and then value ${num2.value}  `)
  const num2 = document.querySelector("#secondNumber")
  const result = document.quertSelector("#result")

  if(isNan(num1) && isNaN(num2)) {
    result.innerHTML = "Please enter the valid input numbers , both are invalid"  
  } else if(isNaN(num1) || isNaN(num2)) {
    result.innerHTML = "Please enter the valid input numbers , one of them  is invalid";
  } else {
    result.innerHTML = `The sum of ${num1} and ${num2} is --> ${num1+num2}`
  }
}