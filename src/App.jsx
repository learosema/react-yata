import React from 'react';
import styled from 'styled-components';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Page from './components/Page';

import { githubClientId } from './config';

import { addTodo, toggleTodo, deleteTodo } from './redux/actions';
import { connect } from 'react-redux';

const Wrapper = styled.main`
  max-width: 60rem;
  margin: 0 auto;
`;

class App extends React.Component {
  state = {
    input: localStorage.getItem('todo_input') || ''
  };

  saveState = () => {
    localStorage.setItem('todo_input', this.state.input);
  };

  componentDidMount() {
    window.addEventListener('beforeunload', this.saveState);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.saveState);
  }

  handleFormSubmit = e => {
    this.props.addTodo(this.state.input);
    this.setState({ input: '' });
    e.preventDefault();
  };

  handleInput = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { todos, toggleTodo, deleteTodo } = this.props;
    return (
      <Page>
        <Wrapper>
          <h1>Yet another TODO app</h1>
          <h3>What do you want to do today?</h3>
          <p>
            <a
              href={`https://github.com/login/oauth/authorize?login&client_id=${githubClientId}`}
            >
              Sign in with Github
            </a>
          </p>
          <TodoForm
            input={this.state.input}
            handleInput={this.handleInput}
            handleFormSubmit={this.handleFormSubmit}
          />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </Wrapper>
      </Page>
    );
  }
}

const mapState = state => ({ input: state.input, todos: state.todos });
const mapDispatch = {
  addTodo,
  toggleTodo,
  deleteTodo
};

export default connect(
  mapState,
  mapDispatch
)(App);
