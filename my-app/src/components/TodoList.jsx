import React from 'react';

function TodoList({ data }) {
  return ( 
    <ul>
      {data.map((todo, index) => (
        <li key={todo.id}>
          {index + 1}. {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
