import './App.css'
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

function App() {
 
  return (
    <>
    <div className=" py-5 flex flex-row items-center justify-center bg-amber-400">
      <NewTodo />
      </div>
      <div className="">
        <Todos/>
      </div>
    
    </>
  );
}

export default App;
