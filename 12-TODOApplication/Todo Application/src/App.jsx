import {memo , useState} from 'react'

export default function App() {
    const [number , setNumber] = useState(0) ;
    const names = ["Rahul Mishra" , "Muskan Acharya" , "Anshul Kumar" , "Ayush" , "Jena"];

    const randomName = names[Math.floor(Math.random()*names.length)]

    console.log("Name ---" , randomName);
    const updateNumber = () => { 
        setNumber(Math.floor(Math.random()*100))
    }
    return (
        <div 
            style = {{
                    display : "flex" ,
                    justifyContent : "space-around" ,
                    alighItems : "space-around"
            }}
        >
            <h1
                style ={{
                    color : "yellow" , 
                    padding : 10 , 
                    margin : 10 , 
                    textAlign : "center" , 
                    backgroundColor : "black" , 
                    width : "150px" , 
                }}
            >
                {randomName}
            </h1>
            <button 
                onClick= {updateNumber}
            >
                Update the number!!!
            </button>
            <NumberComponent number = {number}/>
            <NumberComponent number = {23}/>
            <NumberComponent number = {33}/>
            <NumberComponent number = {400}/>
            <WrapperComponent>
                <NumberComponent number = {number} />
            </WrapperComponent>
        </div>
    )
}


const NumberComponent = memo(function NumberComponent({number}){

    return (
        <>
            <div
                style = {{
                    display : "flex" , 
                    justifyContent : "center" ,
                    alignItems : "center" ,
                    border : "2px solid lightblue" , 
                    width : "60px" , 
                    margin : 10,
                    color : "red" ,
                    fontWeight : "bold"
                }}
                >
                Number : {number} 
            </div>
        </>
    )
}) 

function WrapperComponent({children}) {
    return <div style = {{
        display : "flex" , 
        justifyContent : "center" , 
        alignItems : "center" , 
        border : "2px solid lightblue" , 
        width : "100px"
    }}> 
        {children}
    </div>
}
