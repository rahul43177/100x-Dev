//print the name of the person who are male
const personArray = ['Rahul' , 'Anshul' , 'Priya']
const genderArray = ['Male' , 'Male' , 'Female']

for(let i = 0;i<personArray.length ; i++) {
    if(genderArray[i] == 'Male') {
        console.log(personArray[i]);
    }
}
//optimising the code - using object - instead of using 2 different array - we can use a single object
//we will create array of object 

const persons = [
    {
        firstName : "Rahul" , 
        gender : "Male" 
    } , 
    {
        firstName : "Rohan" , 
        gender : "Male" 
    } ,
    {
        firstName : "Priya" , 
        gender : "Female"
    }

] 
console.log(persons[0])
console.log(persons[1])
console.log(persons[2])

for(let i = 0;i<persons.length;i++) {
    if(persons[i]["gender"] == 'Female') {
        console.log(persons[i]['firstName'])
    }
}