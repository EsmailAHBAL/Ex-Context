import React, { Component } from 'react'
const storageCounter = (data) => {
 localStorage.setItem('counter',JSON.stringify(data)) 
 document.title=`Title : ${data}`
}

export default class Counter extends Component {
  state = {
    counter : +localStorage.getItem('counter') || 0
  }
  handling = (action) => {
    // eslint-disable-next-line default-case
    switch (action) 
    {
      case 'INCREMENT':  
       this.setState((state,props) => {
        const {max,step} =props
          if(state.counter >= max) {
           return
          }
          return {
           counter :state.counter + step
          }
        },() => {
          console.log('saving');
       localStorage.setItem('counter',this.state.counter)
       storageCounter(this.state.counter)
        }
      )
      
      break
      case 'DECREMENT':  

      this.setState((state,props) => {
        const {step} =props
          if(state.counter <= 0) {
           return
          }
          return {
           counter :state.counter - step
          }
        },() => {
             storageCounter(this.state.counter)

        }
      )
break      

      case 'RESET': this.setState((state) => {
        return {
          counter :0
        }
      },() => {
        storageCounter(this.state.counter)
      })  
      break
      
    }

   

  }
  render() {
    return (
      <div className=''>
         <div className="text-3xl mt-5">{this.state.counter}</div>
         <div className="text-sm flex flex-row justify-around mt-4 py-4 px-10">
           <button  onClick={() => this.handling('INCREMENT')}
           className="bg-indigo-700 w-20 h-10  rounded-full ease-in hover:bg-sky-400 duration-700 transition-all hover:w-24">+</button>
            <button className=" mx-2 bg-indigo-700 w-20 h-10 rounded-full ease-in hover:bg-sky-400 duration-700 transition-all hover:w-24" onClick={() => this.handling('RESET')}>Reset</button>
            <button className="bg-indigo-700 w-20 h-10 rounded-full ease-in hover:bg-sky-400 duration-700 transition-all hover:w-24" onClick={() => this.handling('DECREMENT')}>-</button>
         </div>
      </div>
    )
  }
}
