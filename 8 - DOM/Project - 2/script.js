let counter = 0;
function bulbOnOff(){
    counter++;
    const bulb = document.querySelector('#bulb')

    const button = document.querySelector('#button')

    console.log(counter);
    if(counter % 2 ==0) {
        //even case 
        //off
        console.log("Off karna hai")
        bulb.style.backgroundColor = 'white' 
        button.innerHTML = "ON karna hai ?"       

    } else {
        //on 
        console.log("On karna hai ")
        bulb.style.backgroundColor = 'yellow'
        button.innerHTML = "OFF karna hai ?"
    }
}