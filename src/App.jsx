import React from 'react';
import styled from 'styled-components';
import backgroundImage from './assets/coffee-background.jpg';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
// import DebugView from './components/DebugView';
import { addTodo, deleteTodo, toggleTodo, changeInput } from './redux/actions';
import { connect } from 'react-redux';

const Page = styled.section`
  color: white;
  padding: 1rem;
  background: rgb(70, 30, 80);
  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-size: cover;
  background-attachment: fixed;
  width: 100vw;
  min-height: 100vh;
  display: block;
`;

const Wrapper = styled.section`
  max-width: 60rem;
  margin: 0 auto;

  .input-header {
    display: flex;
    justify-content: space-between;

    @media (max-width: 400px) {
      display: block;
      * {
        width: 100%;
      }
    }

    button,
    input {
      display: block;
      margin: 1px;
    }

    input {
      flex-grow: 3;
    }

    button {
      flex-grow: 1;
    }
  }
`;
/* 
class App extends Component {
  state = {
    input: '',
    todos: [
      {
        id: 1,
        task: 'Create a simple TODO application',
        editMode: false,
        done: true
      }
    ],
    lastId: 1
  };

  updateInput = e => this.setState({ input: e.target.value });

  addTodo = todoDescription => {
    this.setState(({ todos, lastId }) => ({
      lastId: lastId + 1,
      todos: (todos.push({
        id: lastId + 1,
        task: todoDescription,
        done: false
      }),
      todos),
      input: ''
    }));
  };

  editTask = newTodo => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === newTodo.id ? { ...todo, newTodo } : todo
      )
    }));
  };

  toggleTask = id => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    }));
  };

  deleteTask = removeId => {
    this.setState(({ todos, props }) => ({
      todos: todos.filter(({ id }) => id !== removeId)
    }));
  };

  handleFormSubmit = e => {
    this.addTodo(this.state.input);
    e.preventDefault();
  };

  render() {
    const { input } = this.state;
    return (
      <Page>
        <Wrapper>
          <h1>Yet another TODO app</h1>
          <h3>What do you want to do today?</h3>
          <TodoForm input={input} handleInput={this.updateInput} handleFormSubmit={this.handleFormSubmit}>
          </TodoForm>
          <TodoList>
            {this.state.todos.map(task =>
              TodoItem({
                ...task,
                handleDeleteTask: this.deleteTask,
                handleCheckTask: this.toggleTask
              })
            )}
          </TodoList>
          <DebugView>{JSON.stringify(this.state, null, 2)}</DebugView>
        </Wrapper>
      </Page>
    );
  }
}

export default App;
*/

const mapState = state => ({ input: state.input, todos: state.todos });
const mapDispatch = { addTodo, deleteTodo, toggleTodo, changeInput };

class App extends React.Component {
  handleFormSubmit = e => {
    this.props.addTodo();
    e.preventDefault();
  };

  handleInput = e => {
    this.props.changeInput(e.target.value);
  };

  render() {
    const { input, todos, deleteTodo, toggleTodo } = this.props;
    return (
      <Page>
        <Wrapper>
          <h1>Yet another TODO app</h1>
          <h3>What do you want to do today?</h3>
          <TodoForm
            input={input}
            handleInput={this.handleInput}
            handleFormSubmit={this.handleFormSubmit}
          />
          <TodoList>
            {todos.map(task =>
              TodoItem({
                ...task,
                handleDeleteTask: deleteTodo,
                handleCheckTask: toggleTodo
              })
            )}
          </TodoList>
        </Wrapper>
      </Page>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(App);
