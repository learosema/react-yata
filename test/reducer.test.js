import rootReducer from '../src/redux/reducers';
import initialState from '../src/redux/initial-state';
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  changeInput,
  clearInput,
  setFilter
} from '../src/redux/actions';

describe('reducer tests', () => {

  test('Undefined action does no changes to the state', () => {
    const state = { ...initialState };
    const result = rootReducer(state);
    expect(result).toEqual(state)
  });

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
      todos: [
        { task: 'foo todo', id: 1, done: false },
        { task: 'bar todo', id: 2, done: false },
      ]
    };
    const id = state.todos[0].id;
    const result = rootReducer(state, toggleTodo(id));
    expect(result.todos[0].done).toBe(true);
    expect(result.todos[1].done).toBe(false);
  });

  test('CHANGE_INPUT changes the input field.', () => {
    const value = 'this is a test input value';
    const state = { ...initialState, input: '' };
    const result = rootReducer(state, changeInput(value));
    expect(result.input).toBe(value);
  });

  test('CLEAR_INPUT clears the input field.', () => {
    const state = { ...initialState, input: 'Lorem Ipsum Dolor Sit amet' };
    const result = rootReducer(state, clearInput());
    expect(result.input).toBe('');
  });

  test('SET_FILFER changes the input field.', () => {
    const value = 'this is a test input value';
    const state = { ...initialState, filter: '' };
    const result = rootReducer(state, setFilter(value));
    expect(result.filter).toBe(value);
  });
});
