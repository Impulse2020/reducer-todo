import React from 'react';
import logo from './logo.svg';
import './App.css';
import reducer from './reducers/reducer';
import Todolist from './todolist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Redux to do list!:</h1>
          <form>
            <label>
            <h4>Task:
             <input type="text-area" name="task" />
             <button>Add</button></h4>
            </label>
          </form>
          
      </header>
    </div>
  );
}

export default App;
