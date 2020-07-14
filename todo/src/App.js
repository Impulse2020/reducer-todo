import React, {useState, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import {initialState, Reducer} from './reducers/reducer';
import Todolist from './components/todolist';

function App() {
const [newTask, setNewTask] = useState("");
const [state , dispatch] = useReducer(Reducer, initialState);

const handleChanges = e => {
setNewTask(e.target.value)


}
const handleSubmit = e =>{
  e.preventDefault();   
  dispatch({ type: "Add_Task", payload: newTask})
  setNewTask("")
}
const complete = e =>{
  dispatch({ type:complete})
}


  return (
   
    <div className="App">
      <header className="App-header">
          <h1>Redux to do list!:</h1>
          
          <form>
            <label>
            <h4>Task:
             <input type="text-area" name="task" value={newTask} onChange={handleChanges} />
             <button onClick={handleSubmit}>
             Add</button></h4>
            </label>
          </form>
          
      
      <Todolist list={state.list} complete={complete} />
      </header>
    </div>
  );
}

export default App;
