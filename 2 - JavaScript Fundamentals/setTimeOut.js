function greet() {
    console.log("Hello world!")
}
// 1 minutes
setTimeout(greet , 1 * 1000) 

function greetThePerson() {
    console.log("Hello sir/mam");
}
//2 minutes
setTimeout(greetThePerson , 2 * 1000) 

//set interval function
setInterval(greet ,  1*1000);