//filter
let array = [1,2,3,4,5,6,7,8,9,10]
console.log("🚀 ~ array:", array)
//we want only even numbers 
const evenArray = array.filter(function(el) {
    return el % 2 === 0
})

console.log(evenArray)

const newArray = array.filter((el)=> el%2!==0)
console.log("🚀 ~ newArray with odd numbers:", newArray)

//map function - higher order function 
//we want to double all the elements into an another new array 
let doubleArray = array.map((el)=> el*2);
console.log(`double array ===> ${doubleArray}`)

