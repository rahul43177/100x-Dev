setTimeout(()=> {
    console.log("Hello I have come after 5 seconds")
}, 5*1000);


setTimeout(() => {
    console.log("This is going to print after 10 seconds")
}, 10 * 1000)

let value = "Rahul"
let timer = 3

setTimeout(() => {
    console.log(`The value which is printing after ${timer} seconds is ${value}`)
}, timer * 1000)

