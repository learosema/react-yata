import React, { Component } from 'react'
import styled from 'styled-components'
import './App.css'

const Wrapper = styled.section`
  color: white;
  padding: 4em;
  background: darkslategrey;
  width: 100vw;
  height: 100vh;
  display: block;
  overflow-x: hidden;
  overflow-y: auto;
`

const Button = styled.button`
  background: ${props => props.danger ? 'crimson' : 'transparent'};
  color: white;
  padding: .5rem 0;
  margin: .5rem; 
  width: 10rem;
  border: 2px solid white;

  &:hover {
    background: ${props => props.danger ? 'salmon' : 'rgba(0,0,0,.2);'}
  }
`

const TodoItem = styled.li``
const TodoList = styled.ul`
  list-style: none;
`

const todoItem = ({id, done, task, handleDeleteTask, handleCheckTask, handleEditMode}) =>
  <TodoItem key={id}>
    <Button danger onClick={() => handleDeleteTask(id)}>delete task</Button>
    <input type="checkbox" checked={done?"checked" : ""} onClick={() => handleCheckTask(id)}/>
    <label id={task.id} className={done?"done":""}>{task}</label>
  </TodoItem>

class App extends Component {

  state = {
    input: "",
    todos: [{
      id: 1,
      task: "Wash the dishes",
      editMode: false,
      done: true
    }],
    lastId: 1
  }

  updateInput = e => this.setState({input: e.target.value })
  
  addTodo = (todoDescription) => {
    this.setState(({todos, lastId}) => ({
      lastId: lastId + 1, 
      todos: (todos.push({id: lastId+1, task: todoDescription, done: false}), todos),
      input: ""
    }))
  }

  editTask = (newTodo) => {
    this.setState(({todos}) => ({todos: todos.map(todo => todo.id === newTodo.id ? {...todo, newTodo} : todo )}))
  }

  toggleTask = (id) => {
    this.setState(({todos}) => ({todos: todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo )}))
  }

  deleteTask = (removeId) => {
    this.setState(({todos,props}) => ({todos: todos.filter(({id}) => id !== removeId)}))
  }

  handleFormSubmit = e => { 
    this.addTodo(this.state.input)
    this.todoInput.focus()
    e.preventDefault()
  }

  render() {
    const { input } = this.state
    return (
      <Wrapper>
          <h1>Yet another TODO app</h1>
          <p>
            <form onSubmit={this.handleFormSubmit}>
              <input ref={input => { this.todoInput = input}} placeholder="enter" onInput={this.updateInput} value={input} required />
              <Button> add TODO </Button>
            </form>
          </p>
        <TodoList>
          {
            this.state.todos.map(task => todoItem({...task, handleDeleteTask: this.deleteTask, handleCheckTask: this.toggleTask }))
          }
        </TodoList>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </Wrapper>
    )
  }
}

export default App
