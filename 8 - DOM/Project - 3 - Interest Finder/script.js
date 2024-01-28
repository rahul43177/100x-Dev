let timeout ;

const debouncedFunction = ()=> {
    clearTimeout(timeout)
    timeout = setTimeout((calculateInterest),1000)
}


const calculateInterest = async () => {
    const principal = document.getElementById('principal').value
    const rate = document.getElementById('rate').value
    const time = document.getElementById('time').value

    const result = document.getElementById("result")
    
    //findInterest
    let response = await fetch(`http://localhost:3000/findInterest?principal=${principal}&rate=${rate}&time=${time}`);


    let interest = await response.text()

    result.innerHTML = interest
    


}