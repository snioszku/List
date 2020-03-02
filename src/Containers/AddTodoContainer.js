import { connect } from 'react-redux';

import addTodoAction from '../ActionCreators/addTodoAction';

import AddTodo from '../Components/AddTodo';

const mapDispatchToProps = dispatch => {
  return { onTodoClick: text => dispatch(addTodoAction(text)) };
};
const AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo);
export default AddTodoContainer;
