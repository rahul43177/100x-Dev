//string 
// function sliceBySelf(string , startIndex , endIndex ) {
//     let newStr  = ''
//     for(let i = 0;i<string.length;i++) {
//         if(i >= startIndex && i < endIndex) {
//             newStr += string[i]
//         }
//     }
//     return newStr;
// }

// const nameOfThePerson = "Rahul Mishra";
// console.log(sliceBySelf(nameOfThePerson , 0 , 3))
// console.log(nameOfThePerson.slice(0,3))


// const value = 'Hi My name is Rahul'

// const words = value.split(" ");
// console.log(words)
// console.log(typeof words)

// const newWord = value.split(',')
// console.log(newWord)

//Trim
// const value = '     Rahul Mishra     '
// trim out the extra spaces from the start and end
// console.log(value.trim())


//to Upper

// const name = 'rahul mishra';

// Function to capitalize the first letter of each word
// function capitalizeWords(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// Capitalize the first letter of each word in the name
// const capitalizedName = capitalizeWords(name);
// console.log(capitalizeWords('anshul kumar'))
// console.log(capitalizeWords('rohan singh'))
// console.log(capitalizeWords('jon doe'))

// console.log(capitalizedName); // Output: Rahul Mishra



// const initialArray = [1,2,3];
// const secondArray = [4,5,6]

// const finalArray = initialArray.concat(secondArray)

// console.log(finalArray);

// console.log(`length of the array is ----> ${finalArray.length}`)
// for(let i = 0;i<finalArray.length;i++) {
//     console.log(finalArray[i]);
// }   


// //callback function 
// function logThing(str) {
//     console.log(str);
// }

// const initialArray = [1,2,3]

// initialArray.forEach(logThing)

// function logWhatsPresent(fn) {
//     fn();
// }
// function log2() {
//     console.log("Coming from inside the log 2")
// }
// logWhatsPresent (log2)

// const array1 = [1,2,2]

// array1.forEach((element)=> console.log(`Element is ${element}`))


// class Animal {
//     constructor(name , legCount) {
//         this.name = name 
//         this.legCount = name
//     }
//     describe() {
//         return `${this.name} has ${this.legCount} legs  `
//     }
// }


// const dog = {
//     name : "doggie" , 
//     legCount : 2 , 
//     speaks : "Bhow bhow"
// }

// animal x bhow bhow with 2 legs 

// console.log(`animal ${dog.name} with leg count ${dog["legCount"]} speaks ${dog["speaks"]}`)

// const cat = {
//     name : "Meow" , 
//     legCount : 4 ,
//     speaks : "Meow Meow"
// }
// function printStr (animal) {
//     console.log(`animal ${animal.name} with leg count ${animal["legCount"]} speaks ${animal["speaks"]}`)
// }

// printStr(cat)
// printStr(dog)

// class Person {
//     constructor(name , age , gender) {
//         this.name = name
//         this.age = age 
//         this.gender = gender
//     }

//     details() {
//         return `${this.name} is ${this.age} years old and the gender of the person is ${this.gender}`
//     }
// }

// const rahul  = new Person('Rahul Mishra' , 23 , 'Male')
// const anshul  = new Person('Anshul' , 23 , 'Female')

// console.log(rahul.details())
// console.log(anshul.details())


//date and time in JavaScript 

//date class in JavaScript 

// const currentDate = new Date()

// console.log(`current date ===> ${currentDate}`)

// console.log(`date : ${currentDate.getDate()}`)

// console.log(`month : ${currentDate.getMonth()}`)

// console.log(`year : ${currentDate.getFullYear()}`)

//JSON - javascript object notation

// const user = {
//     "name" : "rahul",
//     "age" : 23 ,
//     "gender" : "male"
// }

// const json = JSON.stringify(user)
// console.log(json)
// console.log(typeof json)
// console.log(json["name"])
// console.log(json.name)

// const newJson = '{"name":"rahul","age":23,"gender":"male"}'

// const objectFromJson = JSON.parse(newJson)

// console.log(typeof objectFromJson)

// console.log(objectFromJson["name"])
// console.log(objectFromJson["age"])
// console.log(objectFromJson["gender"])


const object = {
    name : "Rahul" ,
    age : 23
}

const newObject = Object.assign({}, object , {gender :  "Male"})

console.log(newObject)



