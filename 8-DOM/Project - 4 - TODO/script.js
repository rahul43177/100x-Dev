let globalId = 1;

function markAsDone(todoId) {
    const parent = document.getElementById(todoId)
    parent.children[2].innerHTML = "DONE"
    //here [2] because we want to access the button -> which is on third position in the parent
}
function createChild(title , description , id) {
    const child = document.createElement('div')
    const firstGrandChild = document.createElement('div')
    firstGrandChild.innerHTML = title
    const secondGrandChild = document.createElement('div')
    secondGrandChild.innerHTML = description
    const thirdGrandChild = document.createElement('button')
    thirdGrandChild.innerHTML = 'Mark as Done'
    thirdGrandChild.setAttribute('onclick' , `markAsDone(${id})`)
    child.appendChild(firstGrandChild)
    child.appendChild(secondGrandChild)
    child.appendChild(thirdGrandChild)
    child.setAttribute('id' , id)
    return child
}



function addTodo() {
    const title = document.getElementById('title').value
    const description = document.getElementById('desc').value

    const parent = document.getElementById('todos')

    parent.appendChild(createChild(title , description , globalId++))
}