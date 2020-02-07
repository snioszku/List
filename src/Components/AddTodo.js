import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import store from '../Reducers/store';
import addTodoAction from '../ActionCreators/addTodoAction';

//todos znowu destruturyzuje sie bo mapStateToProps zwraca obiekt,
//w koteym jest docelow array z todo
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
