import React, { Component } from 'react';
import styled from 'styled-components';
import backgroundImage from './assets/coffee-background.jpg';
import Button from './components/Button';
import InputBox from './components/InputBox';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import DebugView from './components/DebugView';

const Page = styled.section`
  color: white;
  padding: 1rem;
  background: rgb(70, 30, 80);
  background-image: url(${backgroundImage});
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

          <form onSubmit={this.handleFormSubmit}>
            <div class="input-header">
              <InputBox
                placeholder="enter"
                onChange={this.updateInput}
                value={input}
                required
              />
              <Button> add TODO </Button>
            </div>
          </form>
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
