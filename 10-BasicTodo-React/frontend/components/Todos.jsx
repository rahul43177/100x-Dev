export const Todos = ({todos}) => {
    return (
        <div>
            {todos.map((data)=> {
                return (
                    <div key = {data._id}>
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <button>{data.isCompleted == true ? "Mark as uncompleted!!" : "Mark as completed!!"}</button>
                    </div>
                )
            })}
        </div>
    )
}