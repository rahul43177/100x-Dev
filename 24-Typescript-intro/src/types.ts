// type User =  {
//     firstName : string
//     lastName : string 
//     age : number
// }

// interface User2 {
//     firstName : string 
//     lastName : string 
//     age : number 
// }

/*
there is a very subtle difference

Types have - 
1 . Union 
    The below is the union example , where we added number and string both as number | string
2. Intersection 
    The below is the intersection example , where we added number and string both as number & string
*/

//Union
type GreetArguement = number | string 
function greet(id : GreetArguement) : void {
    console.log(id + ' ' + "Hello")
}
greet("1")
greet(1)

//Intersection 
type GreetArguement2 = number & string 
function greet2(id : GreetArguement2) : void {
    console.log(id + ' ' + "Hello")
}
greet2("1")
greet2(1)