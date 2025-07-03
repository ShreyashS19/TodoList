import React, { useState } from 'react';

export default function TodoList() {
  // State to hold the list of todos
  const [todos, setTodos] = useState(["sample Task"]);

  // State to hold the current value typed in the input box
  const [newTodo, setNewTodo] = useState("");

  // Function to handle adding a new task
  const addNewTask = () => {
    console.log(`We have to add a new task in todo is ${newTodo}`  );
    
    if (newTodo.trim() !== "")  //Prevents adding blank tasks
    {
      setTodos([...todos, newTodo]); // Add the new task to the list
      setNewTodo(""); // Clear the input field
    } else {
      console.log("Please enter a valid task.");
    }
  };

  // Function to handle input value change
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
        {todos.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
