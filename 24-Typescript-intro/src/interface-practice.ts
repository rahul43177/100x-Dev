interface Person { 
    name : string , 
    age : number 
    greeting(phrase : string) : void 
}

class Employee implements Person { 
    name : string;
    age : number;

    constructor (n : string , a: number) {
        this.name = n;
        this.age = a;
    }

    greeting (phrase : string ) : void { 
        console.log(phrase , this.name)
    }
}

const newperson1 =  new Employee("Rahul Mishra" , 23)
const newPerson2 = new Employee("Anshul Kumar" , 23)

newperson1.greeting("Hello sir")
newPerson2.greeting("Hi there")