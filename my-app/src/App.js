import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (!input.trim()) {
      return;  
    }

    const newTodo = {
      id: Date.now(),
      text: input,
    };

    const updatedTodos = todos.concat(newTodo);
    
    setTodos(updatedTodos);
    setInput('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List</h2>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTodo}>Add new Todo</button>
        <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;