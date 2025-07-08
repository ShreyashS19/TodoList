import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  
  const [todos, setTodos] = useState([{task:"sample Task", id : uuidv4()}]);

  
  const [newTodo, setNewTodo] = useState("");

  
  const addNewTask = () => {
    console.log(`We have to add a new task in todo is ${newTodo}`  );
    
    if (newTodo.trim() !== "")  //Prevents adding blank tasks
    {
      setTodos([...todos, {task:newTodo, id : uuidv4()}]); // Add the new task to the list
      setNewTodo(""); // Clear the input field
    } else {
      console.log("Please enter a valid task.");
    }
  };

 
  const updateTodoValue = (event) => {
    setNewTodo(event.target.value); // This logs the full input element like (event.target)   but (event.target.value)  only logs (value shown in output) 
  };

  return (
    <div className="todo-container">
      {/* Input field for new task */}
      {/* <input 
        placeholder="add a task" 
        value={newTodo}
        onChange={updateTodoValue} 

      ></input> */}
      <input placeholder="add a task"  value={newTodo} 
      onChange={updateTodoValue} 

    onKeyDown={(e) => {
    if (e.key === 'Enter') {
      addNewTask();
    }
  }}
/>

      
      <br /><br />
      
      <button onClick={addNewTask}>Add Task</button>

      <br /><br /><br />  

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}
