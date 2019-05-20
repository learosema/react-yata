import rootReducer from '../src/redux/reducers';
import initialState from '../src/redux/initial-state';
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  changeInput,
  setFilter
} from '../src/redux/actions';

describe('reducer tests', () => {
  test('ADD_TODO adds a todo element and resets the input field', () => {
    const state = {
      ...initialState,
      input: 'Hello World!',
      todos: []
    };
    const result = rootReducer(state, addTodo(state.input));
    expect(result.todos.length).toBe(1);
    expect(result.todos[0].task).toBe(state.input);
  });

  test('DELETE_TODO deletes a todo element.', () => {
    const state = {
      ...initialState,
      todos: [{ task: 'test todo', id: 1, done: false }]
    };
    const id = state.todos[0].id;
    const result = rootReducer(state, deleteTodo(id));
    expect(result.todos.length).toBe(0);
  });

  test('TOGGLE_TODO toggles a todo element.', () => {
    const state = {
      ...initialState,
      todos: [{ task: 'test todo', id: 1, done: false }]
    };
    const id = state.todos[0].id;
    const result = rootReducer(state, toggleTodo(id));
    expect(result.todos[0].done).toBe(true);
  });

  test('CHANGE_INPUT changes the input field.', () => {
    const value = 'this is a test input value';
    const state = { ...initialState, input: '' };
    const result = rootReducer(state, changeInput(value));
    expect(result.input).toBe(value);
  });

  test('SET_FILFER changes the input field.', () => {
    const value = 'this is a test input value';
    const state = { ...initialState, filter: '' };
    const result = rootReducer(state, setFilter(value));
    expect(result.filter).toBe(value);
  });
});
