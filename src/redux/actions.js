export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const CLEAR_INPUT = 'CLEAR_INPUT';
export const SET_FILTER = 'SET_FILTER';

export const addTodo = value => ({
  type: ADD_TODO,
  value
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export const clearInput = () => ({
  type: CLEAR_INPUT
})

export const changeInput = value => ({
  type: CHANGE_INPUT,
  value
});

export const setFilter = value => ({
  type: SET_FILTER,
  value
});
