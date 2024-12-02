// export const Todos = ({ todos }) => {
//     return (
//         <>
//             {todos.map(({ id, title, description, isCompleted }) => {
//                 return (
//                     <div key={id}>
//                         <h2>{title}</h2>
//                         <h3>{description}</h3>
//                         <button>{isCompleted ? "Mark as not completed" : "Mark as completed!"}</button>
//                     </div>
//                 );
//             })}
//         </>
//     );
// }

export const Todos = ({todos}) => {
    return (
        <>  
            {todos.map(({id , title, description , isCompleted}) => {
                return (
                    <div key = {id}>
                        <h1>
                            {title}
                        </h1>
                        <h3>
                            {description}
                        </h3>
                        <button>
                            {isCompleted ? "Mark as not completed" : "Mark as completed!"}
                        </button>
                    </div>
                )
            })}
        </>
    )
}