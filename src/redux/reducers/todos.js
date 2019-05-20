import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions';

let lastId = 1;

export default function todos(state = [], action = { type: null }) {
  const addTodo = ({ value }) => {
    return state.concat({
      id: ++lastId,
      task: value,
      editMode: false,
      done: false
    });
  };
  const deleteTodo = ({ id }) => {
    return state.filter(todo => todo.id !== id);
  };
  const toggleTodo = ({ id }) => {
    return state.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
  };
  const stateChange = {
    [ADD_TODO]: addTodo,
    [DELETE_TODO]: deleteTodo,
    [TOGGLE_TODO]: toggleTodo
  };
  if (action.type in stateChange) {
    return stateChange[action.type](action);
  }
  return [...state];
}
