import reducer from '../src/redux/reducer';
import initialState from '../src/redux/initial-state';
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  changeInput
} from '../src/redux/actions';

describe('reducer tests', () => {
  test('ADD_TODO adds a todo element and resets the input field', () => {
    const state = { ...initialState, input: 'test todo' };
    const result = reducer(state, addTodo());
    expect(result.todos.length).toBe(2);
    expect(result.todos[1].task).toBe('test todo');
    expect(result.input).toBe('');
  });

  test('DELETE_TODO deletes a todo element.', () => {
    const state = {
      ...initialState,
      todos: [{ task: 'test todo', id: 1, done: false }]
    };
    const id = state.todos[0].id;
    const result = reducer(state, deleteTodo(id));
    expect(result.todos.length).toBe(0);
  });

  test('TOGGLE_TODO toggles a todo element.', () => {
    const state = {
      ...initialState,
      todos: [{ task: 'test todo', id: 1, done: false }]
    };
    const id = state.todos[0].id;
    const result = reducer(state, toggleTodo(id));
    expect(result.todos[0].done).toBe(true);
  });

  test('CHANGE_INPUT changes the input field.', () => {
    const value = 'this is a test input value';
    const state = { ...initialState, input: '' };
    const result = reducer(state, changeInput(value));
    expect(result.input).toBe(value);
  });
});
