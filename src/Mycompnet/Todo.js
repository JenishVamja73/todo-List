import React from 'react';
import { Todoitem } from '../Mycompnet/Todoitem';

export  const Todo=(props)=> {

  return (
    <div className='container'>
      <h3 className='text-center'>TodoList</h3>
      <Todoitem todo = {props.todos[0]}/ >
      {/* {props.todo.map((todo)=>{
        return
          <Todoitem todo={props.todo}></Todoitem>
        
      })} */}
      {props.todos.map((todo)=>{
        
        return <Todoitem key={todo.id} todo={todo} onDelete={onDelete}/>
      })}
    {/* {  props.todos} */}
    </div>
  )
}
