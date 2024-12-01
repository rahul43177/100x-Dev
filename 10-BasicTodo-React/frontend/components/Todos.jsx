export const Todos = ({todos}) => {
    return (
        <>
            {todos.map((todo) => {
                return (
                <div>
                    
                    <h1>{todo.title}</h1>
                    <h3>{todo.description}</h3>
                    <button>{todo.isCompleted == true ? "Compeleted" : "Not Completed"}</button>
                </div>
                )
            })}
        </>
    )
}