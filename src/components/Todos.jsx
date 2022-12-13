import React from 'react'
import Todo from './Todo'

export default function Todos({data,getName}) {
  return (
    <div className='text-center '>
      <div className="text-2xl font-extrabold">{data['length']}</div>
      <div className="">
        {
          data.map(todo => (
            <Todo item = {todo}  
            key={todo.name+ todo.todo} 
            getName={getName}/>
          ))
        }
      </div>
    </div>
  )
}
