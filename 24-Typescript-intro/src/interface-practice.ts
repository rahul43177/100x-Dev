interface Person {
    name : string;
    age : number;
    greet() : void
} 

class Employee implements Person {
    name : string ;
    age : number ;

    constructor(name : string , age : number) {
        this.name = name;
        this.age = age;
    }

    greet():void {
        console.log(`Hello , My name is ${this.name} and I am ${this.age}`)
    }
}

let user1 = new Employee("Rahul Mishra" , 23)
user1.greet()