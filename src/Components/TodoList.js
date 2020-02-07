import React from 'react';

const TodoList = ({ todos, onToogleTodo }) => {
  return (
    <div>
      <ul>
        <li>lista</li>
        {todos.map(t => (
          <li
            key={t.id}
            onClick={() => {
              onToogleTodo(t.id);
            }}
            style={{
              textDecoration: t.completed ? 'line-through' : 'none',
            }}
          >
            {t.text} {t.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
