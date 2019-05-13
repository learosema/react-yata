import React, { Component } from 'react';
import styled from 'styled-components';
import './assets/App.css';
import backgroundImage from './assets/coffee-background.jpg';
import Button from './components/Button';
import InputBox from './components/InputBox';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import DebugView from './components/DebugView';

const Wrapper = styled.section`
  color: darkblue;
  padding: 4em 8em;
  margin: 0;
  background: papayawhip url(${backgroundImage});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: block;
  overflow-x: hidden;
  overflow-y: auto;
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
      <Wrapper>
        <h1>Yet another TODO app</h1>
        <h3>What do you want to do today?</h3>
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <InputBox
              placeholder="enter"
              onChange={this.updateInput}
              value={input}
              required
            />
            <Button> add TODO </Button>
          </form>
        </div>
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
    );
  }
}

export default App;
