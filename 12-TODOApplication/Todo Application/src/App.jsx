import { useState  } from "react";

export default function App() {
    const todos = [
        {
            id : 1 , 
            task : "Run" , 
            description : "Go for 10k run",
            isCompleted : true
        } , 
        {
            id : 2, 
            task : "Code" , 
            description : "Code for 2 hours - Learn React",
            isCompleted : false
        } , 
        {
            id : 3 , 
            task : "Family" , 
            description : "Spend time with family",
            isCompleted : true
        }
    ]



    return (
        <>
            <Heading>
                TODO APPLICATION
            </Heading>
            {todos.map((todo) => {
                return <div
                    style = {{
                        border : "2px solid black" , 
                        margin : 5 , 
                        padding : 5 ,
                        display : "flex" , 
                        flexDirection : "column" , 
                        justifyContent : "center" , 
                        alignItems : "center"
                    }}
                >
                    <h3
                        style = {{
                            fontFamily : "Fira Code" ,
                            textAlign : "center"
                        }}
                    >
                        {todo.task} 
                    </h3>
                    <h4
                        style = {{
                            textAlign : "center"
                        }}
                    >{todo.description}</h4>
                    <button
                        style = {{
                            backgroundColor : todo.isCompleted  ? "green" : "red" ,
                            fontWeight : "bold" , 
                            fontFamily : "Jetbrains Mono" ,
                            color : "white" ,
                            borderRadius : "50px"
                        }}
                    >{todo.isCompleted ? "Mark as uncompleted" : "Mark as completed"}</button>
                </div>
            })}
        </>
    )
}




const Heading = ({ children }) => {
    return (
        <>
            <h1
                style={{
                    fontFamily: "Calibri, sans-serif",
                    color: "pink",
                    fontWeight: "bold",
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Adds a shadow effect
                    border: "2px solid black", // Black outline
                    borderRadius: "10px", // Rounded corners
                    backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent background
                    margin: "20px", // Margin around the heading
                    transition: "transform 0.3s, box-shadow 0.3s", // Transition for hover effect 

                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)"; // Slightly enlarge on hover
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.5)"; // Add shadow on hover
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)"; // Reset size on mouse leave
                    e.currentTarget.style.boxShadow = "none"; // Remove shadow on mouse leave
                }}
            >
                {children}
            </h1>
        </>
    );
};
