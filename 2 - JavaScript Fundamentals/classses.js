class Animal {
    constructor(name , legCount , speaks) {
        this.name = name
        this.legCount = legCount
        this.speaks = speaks
    }
    
    speak() {
        console.log('Hi there '+ this.speaks)
    }
}

let dog = new Animal('dog' , 4, 'bhow bhow')
let cat = new Animal('cat' , 4 , 'meow meow')
let mouse = new Animal('mouse' , 4 , 'squeek')
let chicken = new Animal('chicken' , 2 , 'cluck cluck')
let cow = new Animal('cow' , 4 , 'moo moo')

cow.speak();
chicken.speak()

console.log(dog)


