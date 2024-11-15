interface User {
    firstName : string , 
    lastName : string , 
    age : number , 
    email ?: string //here ? indicates that it is optional
}


function isLegal(user : User) {
    if(user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet (user : User) {
    return `hello ${user.firstName} ${user.lastName}`
}

let user = {
    firstName : "Rahul" , 
    lastName : "Mishra" , 
    age : 23
}

console.log(isLegal(user))
console.log(greet(user))

