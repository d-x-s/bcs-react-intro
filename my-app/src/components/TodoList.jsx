import React from 'react';

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={todo.id}>
          {index + 1}. {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
