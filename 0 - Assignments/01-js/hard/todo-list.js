//done
/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todo = [];
  }

  add(todo) {
    this.todo.push(todo)
  }
  remove(todoIndex)  {
    //first we will check if that index is present or not 
    if(todoIndex >= 0  && todoIndex < this.todo.length){
      const removed = this.todo.splice(todoIndex, 1);
      console.log(`toDo removed ${removed}`)
    } else {
      console.log(`The index is wrong : Todo not removed`)
    }
  }

  update(index , updatedTodo) {
    if(index >=0 && index  < this.todo.length) {
      this.todo[index] = updatedTodo 
      console.log(`The todo is updated successfully`) 
    } else {
      console.log(`The index is wrong : Todo not updated`)
    }
  }
  getAll() {
    return this.todo
  }
  get(index) {
    if(index >= 0 && index < this.todo.length ) {
      console.log('Todo found and returned')
      return this.todo[index]
    } else {

      console.log('Todo not found : index not found')
      return null;
    }
  }
  clear() {
    console.log('Deleted all the todos');
    this.todo = [];
  }
}

module.exports = Todo;
