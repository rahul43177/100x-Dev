interface Person {
    name : string 
    age : number 
    greet(phrase : string) : void 
}

class Employee implements Person {
    name : string 
    age : number 

    constructor(n : string , a : number) {
        this.name = n 
        this.age = a 
    }

    greet(phrase : string) : void {
        console.log(phrase + ' ' + this.name)
    }
}


let user2 = new Employee("Rahul Mishra" , 23)
let user1 = new Employee("Anshul Kumar" , 24)
user2.greet("Hi there - I am")
user1.greet("Hi there - I am")