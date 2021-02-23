import React from 'react';
import Todo from './Todo';

const Todolist = ({todos, setTodos, filtredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filtredTodos.map((todo) => (
                  <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />  
                ))}
            </ul>
        </div>
    );
}
export default Todolist ;