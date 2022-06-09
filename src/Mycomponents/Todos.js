import React from 'react'
import {TodoItems} from "./TodoItems";

export const Todos = (props) => {
  let mystyle ={
    minheight:"70vh",
    margin: "50px auto"
  }
  return (
    <div className='container' style={mystyle}>
      <h3 className='my-3'>My Todo List</h3>
      {  props.todos.length===0? <h5>No Todos list display!</h5>: 
         props.todos.map((todo)=>{
          return (
           <>
            <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
           </>
          )
       })}
    </div>
  )
}
