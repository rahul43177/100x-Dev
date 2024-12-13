import {useState} from 'react'

export default function App() {
    const todos = [
        {
            id : 1 , 
            title : "RUn" , 
            description : "Go for 10k run",
            isCompleted : false 
        } , 
        {
            id : 2 , 
            title : "Walk" , 
            description : "Walk for 2k" ,
            isCompleted : true
        } , 
        {
            id : 3 , 
            title : "Gym" , 
            description : "Go to the gym",
            isCompleted : true
        }
    ]   

    const newTodos = [
        {
            id : 3 , 
            title : "New Todo" , 
            description : "New todo description"
        } , 
        {
            id : 4 , 
            title : "Title of the new todo" , 
            description : "New todo"
        } , 
        {
            id : 5 , 
            title : "TODO TODO" , 
            description : "popopopopop"
        }
    ]

    return (
        <>
            <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
                <p
                    style={{
                        paddingTop: "20px",
                        margin: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#333'
                    }}
                >The todos are --</p>
                <TodosComponent todoDetails={todos} />
                <TodosComponent todoDetails={newTodos} />
            </div>
        </>
    )
}

const TodosComponent = (props) => {
    return (
        <>
            {props.todoDetails.map((singleTodo) => {
                return (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: '10px',
                            margin: '10px 0',
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                        }}
                    >
                        <h3
                            style={{
                                padding: 5,
                                margin: 5,
                                fontSize: 22,
                                fontFamily: "JetBrains Mono",
                                color: '#444'
                            }}
                        >{singleTodo.title}</h3>
                        <h3
                            style={{
                                padding: 3,
                                margin: 3,
                                fontSize: 18,
                                fontFamily: "Fira Code",
                                color: '#666'
                            }}
                        >{singleTodo.description}</h3>
                        <button
                            style={{
                                color: "white",
                                padding: '10px 15px',
                                margin: 10,
                                backgroundColor: singleTodo.isCompleted ? "red" : "green",
                                fontWeight: "bold",
                                borderRadius: "50px",
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = singleTodo.isCompleted ? "#c00" : "#005700"}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = singleTodo.isCompleted ? "red" : "green"}
                        >{singleTodo.isCompleted ? "Mark as uncompleted!!" : "Mark as completed!!"}</button>
                    </div>
                )
            })}
        </>
    )
}
