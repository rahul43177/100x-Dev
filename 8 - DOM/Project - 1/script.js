//applying debouncing in our application
let timeout;
function debouncePopulateDin() {
  clearTimeout(timeout)  //CLEARING THE CLOCK -> IF SOMEONE IS TYPING VERY FAST 
  timeout = setTimeout(()=> {
    findSum() //CALLING THE CLOCK AFTER 1 SECONDS
  },1000)
}


async function findSum() {
  const a = document.getElementById('firstNumber').value
  const b = document.getElementById('secondNumber').value
  
  const response = await fetch(`http://localhost:3000/sum?num1=${a}&num2=${b}`)
//http://localhost:3000/sum?num1=${a}&num2=${b}
  const ans = await response.text()

   document.getElementById("result").innerHTML = ans
}