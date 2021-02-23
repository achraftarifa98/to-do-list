import React, { useState } from 'react' ;
import './App.css';
import From from './components/Form';
import Todolist from './components/Todolist'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  
  return (
    <div className="App">
      <header>
        <h1>My to do list</h1>
      </header>
      <From todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <Todolist  setTodos={setTodos} todos={todos}/>
    </div>
  );
};

export default App;
