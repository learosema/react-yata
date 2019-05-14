export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_INPUT = 'CHANGE_INPUT';

export const addTodo = () => ({
  type: ADD_TODO
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
});

export const changeInput = (value) => ({
  type: CHANGE_INPUT,
  value
});
