import React, { Component } from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import 'font-awesome/css/font-awesome.css'
import './assets/App.css'
import backgroundImage from './assets/coffee-background.jpg'

const Wrapper = styled.section`
  color: darkblue;
  padding: 4em 8em;
  margin: 0;
  background: chocolate url(${backgroundImage});
  background-size: cover;
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

const InputBox = styled.input`
  padding: 8px;
  width: 50%;
`

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
`

const TodoLabel = styled.label`
  color: royalblue;
  font-family: cursive;
  width: 500px;
  display: inline;
  padding: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: ${props => props.done ? 'line-through' : 'none'}
`

const TodoCheckbox = styled.input`
  display: inline-block;  
`

const TodoListElement = styled.li`
  display: block;
  padding: 2em;
  border-radius: 8px;
  background: papayawhip;
  margin: 4px 0;
  box-shadow: 4px 4px 16px 0 rgba(0,0,0,.4);
` 

const DebugView = styled.pre`
  background: rgba(0,0,0,.5);
  color: #fff;
  position: absolute;
  margin: 0;
  padding: 2em;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20vh;
  overflow: auto;
`

const todoItem = ({id, done, task, handleDeleteTask, handleCheckTask, handleEditMode}) =>
  <TodoListElement key={id}>
    <Button danger onClick={() => handleDeleteTask(id)}><FontAwesome name="times" /> delete</Button>
    <TodoCheckbox type="checkbox" checked={done?"checked" : ""} for={task.id} onChange={() => handleCheckTask(id)}/>
    <TodoLabel id={task.id} done={done}>{task}</TodoLabel>
  </TodoListElement>

class App extends Component {

  state = {
    input: "",
    todos: [{
      id: 1,
      task: "Create a simple TODO application",
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
    e.preventDefault()
  }

  render() {
    const { input } = this.state
    return (
      <Wrapper>
          <h1>Yet another TODO app</h1>
          <h3>What do you want to do today?</h3>
          <div>
            <form onSubmit={this.handleFormSubmit}>
              <InputBox placeholder="enter" onInput={this.updateInput} value={input} required />
              <Button> add TODO </Button>
            </form>
          </div>
        <TodoList>
          {
            this.state.todos.map(task => todoItem({...task, handleDeleteTask: this.deleteTask, handleCheckTask: this.toggleTask }))
          }
        </TodoList>
        <DebugView>
          {JSON.stringify(this.state, null, 2)}
        </DebugView>
      </Wrapper>
    )
  }
}

export default App