import React from 'react';
import Todo from './Todo';

const Todolist = ({todos,setTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                  <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />  
                ))}
            </ul>
        </div>
    );
}
export default Todolist ;