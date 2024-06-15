"use strict";
function isEligible(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log("Checking");
console.log(isEligible(211));
console.log(isEligible(19));
console.log(isEligible(12));
console.log(isEligible(20));
