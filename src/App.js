import { useCallback, useReducer, useState } from 'react';
import './App.css'
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import initialValue  from './todo'
const ADD_ITEM ='ADD'
const REMOVE_ITEM ='REMOVE'
const reducer = (state,action) => {
  if(action.type === ADD_ITEM) {
   return [...state,action.payload]
  }
  if(action.type === REMOVE_ITEM) {
       const newState=  state.map(todo => {
          if(action.payload.name !== todo.name) return todo
          return {...todo,confirmed:!todo.confirmed}
         })

         return newState
  } 
}
function App() {
  const [todos,dispatch] = useReducer(reducer,initialValue)
  const addingNewItem = useCallback((todo) => {
    dispatch({
      type:ADD_ITEM,
      payload:{...todo,confirmed:false}
    })

  },[dispatch])
  const OK =useCallback(name => {
    dispatch({
      type:REMOVE_ITEM,payload:{name}
    })
  },[dispatch])
  // const OK = (name) => {
  //   setTodos(
  //     todos.map(item => {
  //       if (item.name !== name) return item;
  //       return { ...item, forgiven: !item.confirmed };
  //     })
  //   );
  // }
  return (
    <>
    <div className=" py-5 flex flex-row items-center justify-center bg-amber-400">
      <NewTodo onSubmit={ addingNewItem}/>
      </div>
      <div className="">
        <Todos data={todos} getName={OK}/>
      </div>
    
    </>
  );
}

export default App;
