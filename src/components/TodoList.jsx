import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const UnlinkedList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <UnlinkedList>
    {todos.map(task =>
      TodoItem({
        ...task,
        handleDeleteTask: deleteTodo,
        handleCheckTask: toggleTodo
      })
    )}
  </UnlinkedList>
);

export default TodoList;
