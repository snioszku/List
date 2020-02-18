const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  response,
  filter,
});
export default receiveTodos;
