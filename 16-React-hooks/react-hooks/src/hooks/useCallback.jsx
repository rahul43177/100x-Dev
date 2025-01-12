import {useEffect, useState} from 'react'

export default function LearningUseCallBack() {
    const [greet , setGreet] = useState("")
    const greetings = [
        "Hi There!" , 
        "How are you!" ,
        "I hope you  doing good" , 
        "Have a nice day"
    ]

    setInterval(() => {
        const index = Math.floor(Math.random()* greetings.length);
        console.log("The index ->" , index)
        console.log("The greeting ->" , greetings[index])
        setGreet(greetings[index])
    }, 3*1000)
    return (
        <div>
            <p> 
                
                {console.log("Greet" , greet)}
                {greet}
            </p>
        </div>
    )
}