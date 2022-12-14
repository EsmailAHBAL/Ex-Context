import React ,{useContext}from 'react'
import { todoContext} from '../TodoContext'
import Todo from './Todo'

export default function Todos() {
  const {todos} = useContext(todoContext)
  return (
    <div className='text-center '>
      <div className="text-2xl font-extrabold">{todos['length']}</div>
      <div className="">
        {
          todos.map(todo => (
            <Todo item = {todo}  
            key={todo.name+ todo.todo} 
            />
          ))
        }
      </div>
    </div>
  )
}
