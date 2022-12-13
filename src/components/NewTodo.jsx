import React, { useState } from "react";

 const NewTodo = React.memo( ({onSubmit}) => {
  console.log('new Todo Rendering');
  const [name,setName] = useState('')
  const [todo,setTodo] = useState('')
  const handlingChange = (e) => {
    e.preventDefault()
    onSubmit({name,todo})
  }

return (
  <form className='flex flex-row justify-center' onSubmit={e =>handlingChange(e)}>
     <div >
      <input type="text" className="w-28 p-2 rounded-lg" 
     value={name}
     onChange={(e) =>setName(e.target.value) }
     placeholder='adding u name'/>
     </div>
     <div>
      <input
     value={todo}
     onChange={(e) =>setTodo(e.target.value) }
     type="text" className="h-10 mx-2 p-2 rounded-lg" placeholder='adding new Todo'/></div>

     <div>
      <button className="mx-4 bg-sky-400 rounded-full
     text-black
     p-2 hover:bg-black 
     hover:text-white
     ease-in-out duration-700 transition-all" type='submit'>Add New Todo</button></div>
  </form>
)
}
 )
export default NewTodo