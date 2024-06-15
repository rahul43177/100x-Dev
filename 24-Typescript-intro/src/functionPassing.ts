function sum(a : number , b : number) {
    return a+b;
}


function runAfter5Seconds(fn : ()=> void) {
    setTimeout(fn , 5*1000);
}

runAfter5Seconds(()=> {
    console.log("Hello world");
})