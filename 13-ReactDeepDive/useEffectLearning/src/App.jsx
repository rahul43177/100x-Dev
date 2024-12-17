import {useState} from 'react'


function App() {
    return (
        <>
            <div
                style = {{
                    display : "flex" , 
                    // flexDirection : "row"
                }}
            >
                <button
                    style = {{
                        padding : 10 , 
                        margin : 10 , 
                        border : "2px solid black" ,
                        borderRadius : "50%" ,
                        fontFamily : "JetBrains Mono" , 
                        textDecoration : "underline"
                    }}
                >hi There</button>
                <h3
                    style = {{
                        padding : 10 , 
                        margin : 10 , 
                        border : "2px solid green" , 
                        borderRadius : "50px"
                    }}
                >Bye there</h3>
                <a 
                    href="https://www.google.com" 
                    target = "_blank"
                    style = {{
                        textDecoration : "none" , 
                        color : "pink" , 
                        backgroundColor : "black" , 
                        height : 10 , 
                        fontFamily : "Gill Sans" , 
                        padding : 10 , 
                        margin : 10  ,
                        margin : "auto" , 
                        alignContent : "center" , 
                        
                    }}
                >
                    Click here to go to google
                </a>
                <a 
                    href="https://www.instagram.com" 
                    target = "_blank" 
                    style = {{
                        textDecoration : "none" , 
                        color : "pink" , 
                        backgroundColor : "black" , 
                        height : 10 , 
                        fontFamily : "Gill Sans"
                    }}
                >
                    Click here to go to google
                </a>
            </div>
        </>
    )
}

export default App;