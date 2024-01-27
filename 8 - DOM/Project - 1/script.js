function populateDiv() {
  const element = document.getElementById("finalSum");

  const num1 = parseInt(document.getElementById("firstNumber").value);
  const num2 = parseInt(document.getElementById("secondNumber").value);

  if(isNaN(num1) && isNaN(num2)) {
    element.innerHTML = 'Please enter two valid numbers'
  }else {
    element.innerHTML = num1 + num2;
  }
  
}
