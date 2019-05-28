const guid = require('./guid');

const todos = [];

function getTodos(username) {
  return todos.filter(todo => username === todo.username);
}

function addTodo(username, task, done) {
  const todo = {
    username,
    id: guid(),
    task,
    done
  };
  todos.push(todo);
  return todo;
}

function deleteTodo(username, id) {
  const index = todos.findIndex(el => el.id === id && el.username === username);
  if (index === -1) {
    return 0;
  }
  todos.splice(index, 1);
  return 1;
}

module.exports = {
  getTodos,
  addTodo,
  deleteTodo
};
