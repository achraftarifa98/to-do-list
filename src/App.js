import React, { useState } from 'react' ;
import './App.css';
import From from './components/Form';
import Todolist from './components/Todolist'

function App() {
  const [inputText, setInputText] = useState("");
  
  return (
    <div className="App">
      <header>
        <h1>My to do list</h1>
      </header>
      <From setInputText={setInputText}/>
      <Todolist />
    </div>
  );
};

export default App;
