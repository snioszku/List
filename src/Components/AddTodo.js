import React from 'react';
import { useState } from 'react';

const AddTodo = ({ onTodoClick }) => {
  const [inpvalue, setInpvalue] = useState('');

  return (
    <div>
      <input
        id="add"
        onChange={e => setInpvalue(e.target.value)}
        value={inpvalue}
      />
      <button
        onClick={() => {
          onTodoClick(inpvalue);
          console.log(onTodoClick);
          setInpvalue('');
        }}
      >
        {' '}
        Add
      </button>{' '}
    </div>
  );
};

export default AddTodo;
