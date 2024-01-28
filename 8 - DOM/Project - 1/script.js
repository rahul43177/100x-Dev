async function findSum() {
  const a = document.getElementById('firstNumber').value
  const b = document.getElementById('secondNumber').value
  
  const response = await fetch(`http://localhost:3000/sum?num1=${a}&num2=${b}`)
//http://localhost:3000/sum?num1=${a}&num2=${b}
  const ans = await response.text()

   document.getElementById("result").innerHTML = ans
}