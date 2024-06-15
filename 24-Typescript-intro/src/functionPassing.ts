function sumFunction() {
    console.log("Running after 2 seconds");
}

function mainFunction(fn : () => void) {
    setTimeout(fn , 2000);
}

mainFunction(sumFunction);