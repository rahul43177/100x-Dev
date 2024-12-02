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

// [
//     {
//         "_id": "674d794672ef1e3aa633cc4a",
//         "title": "Complete todo application project",
//         "description": "Complete the basics of react and todo application",
//         "__v": 0
//     },
//     {
//         "_id": "674d7a0f72ef1e3aa633cc54",
//         "title": "Go for a walk",
//         "description": "complete 10k in a walk",
//         "__v": 0
//     }
// ]
// export function Todos({ todos }) {
//     console.log("inside todo component", todos);
//     return (
//         <>
//             {todos.map(({ _id, title, description }) => {
//                 console.log("Inside the todo", title);
//                 return (
//                     <div key={_id}>
//                         <h3>{title}</h3>
//                         <h4>{description}</h4>
//                     </div>
//                 );
//             })}
//         </>
//     );
// }
export function Todos({todos}) {
    console.log("The todos in todo component" , todos)
    return (
        <>
            {todos.map(({todos})=> {
                return (
                    <div key = {todos._id}> 
                        <h3>{todos.title}</h3>
                        <h4>{todos.description}</h4>
                    </div>
                )
            })}
        </>
    )
}