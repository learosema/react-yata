import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actions';
import initialState from './initial-state';

export default function reducer(state = initialState, action = { type: null }) {
  const nop = function() {
    return { ...state };
  };
  const stateChange = {
    ADD_TODO: () => {
      const id = state.lastId + 1;
      return {
        ...state,
        input: '',
        todos: state.todos.concat({
          id,
          task: state.input,
          editMode: false,
          done: false
        }),
        lastId: id
      };
    },
    DELETE_TODO: ({ id }) => {
      const todos = state.todos.filter(todo => todo.id !== id);
      return {
        ...state,
        todos
      };
    },
    TOGGLE_TODO: ({ id }) => {
      const todos = state.todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
      return {
        ...state,
        todos
      };
    },
    CHANGE_INPUT: ({ value }) => ({ ...state, input: value })
  };
  return (stateChange[action.type] || nop)(action);
}
