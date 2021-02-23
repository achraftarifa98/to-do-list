import React, { useState, useEffect } from 'react' ;
import './App.css';
import From from './components/Form';
import Todo from './components/Todo';
import Todolist from './components/Todolist'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtredTodos, setFiltredTodos] = useState([]);
  useEffect(()=>{
    filterHandler();
  },[todos, status]);
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFiltredTodos(todos.filter(todo => 
          todo.completed === true 
        ));
        break;
      case "uncompleted":
        setFiltredTodos(todos.filter((todo) => 
          todo.completed === false 
        ));
        break;
      default :
        setFiltredTodos(todos);
        break;
    }
  };
  
  return (
    <div className="App">
      <header>
        <h1>My to do list</h1>
      </header>
      <From 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <Todolist  setTodos={setTodos} todos={todos} filtredTodos={filtredTodos} />
    </div>
  );
};

export default App;
