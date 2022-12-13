import React from 'react'

 const Todo =React.memo(({item,getName}) =>{
   const C_F = ()=> getName(item.name)
   console.log(`Rendering` + item.name);
  return (
    <div className='flex flex-row justify-around px-5 '>
     <div className=" flex flex-row justify-around mt-2">
      <div className='py-5 rounded-full'>{item.name}</div>
      <div className='bg-amber-100 p-5 rounded-full ml-4'>{item.todo}</div>
     </div>
   
    <label className="Grudge-forgiven">
          <input type="checkbox" checked={item.confirmed} onChange={C_F} />{' '}
          ✔ 
        </label>
    </div>
  )
})

export default Todo
