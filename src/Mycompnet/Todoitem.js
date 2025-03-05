import React from 'react'

export const Todoitem=({todo,onDelete})=> {
  
  // console.log(todos)
  return (
    <div>
      TodoList
      <h4>{todo.title}</h4>
      <p>{todo.dec}</p>
      <button type="button" class="btn btn-sm btn-danger" onClick={onDelete}>Delete</button>


      
    </div>
  )
}
