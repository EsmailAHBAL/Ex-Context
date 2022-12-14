import React , {useReducer,useCallback,createContext} from 'react'
import initialValue  from './todo'
// *****************************************
export const todoContext= createContext()
// *****************************************
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

export const ContextProvider = ({children}) => {
  const [todos,dispatch] = useReducer(reducer,initialValue)
  const addingNewItem = useCallback((todo) => {
    dispatch({
      type:ADD_ITEM,
      payload:{...todo,confirmed:false}
    })

  },[dispatch])
  const RemoveItem =useCallback(name => {
    dispatch({
      type:REMOVE_ITEM,payload:{name}
    })
  },[dispatch])
  const value = {RemoveItem,addingNewItem,todos}
 return (
  
<todoContext.Provider value={value}>
 {children}
</todoContext.Provider>
 ) 
}