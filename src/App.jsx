import React from 'react';
import styled from 'styled-components';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Page from './components/Page';

import { addTodo, changeInput, toggleTodo, deleteTodo } from './redux/actions';
import { connect } from 'react-redux';

const Wrapper = styled.main`
  max-width: 60rem;
  margin: 0 auto;
`;

class App extends React.Component {
  handleFormSubmit = e => {
    this.props.addTodo();
    e.preventDefault();
  };

  handleInput = e => {
    this.props.changeInput(e.target.value);
  };

  render() {
    const { input, todos, toggleTodo, deleteTodo } = this.props;
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
const mapDispatch = { addTodo, changeInput, toggleTodo, deleteTodo };

export default connect(
  mapState,
  mapDispatch
)(App);
