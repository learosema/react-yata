import React, { Component } from 'react'
import './App.css'

const todoItem = ({id, done, task, handleDeleteTask, handleCheckTask, handleEditMode}) =>
  <li className="todo-item" key={id}>
    <button onClick={() => handleDeleteTask(id)}>delete task</button>
    <input type="checkbox" checked={done?"checked" : ""} onClick={() => handleCheckTask(id)}/>
    <label id={task.id} className={done?"done":""}>{task}</label>
  </li>

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
    e.preventDefault()
  }

  render() {
    const { input } = this.state
    return (
      <div className="app">
        <div className="app--header">
          <h1>Yet another TODO app</h1>
          <p>
            <form onSubmit={this.handleFormSubmit}>
              <input name="todoInput" placeholder="enter" onInput={this.updateInput} value={input} required />
              <button> add TODO </button>
            </form>
          </p>
        </div>
        <ul>
          {
            this.state.todos.map(task => todoItem({...task, handleDeleteTask: this.deleteTask, handleCheckTask: this.toggleTask }))
          }
        </ul>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    )
  }
}

export default App
