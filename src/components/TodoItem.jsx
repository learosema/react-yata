import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const TodoListElement = styled.li`
  display: block;
  padding: 1rem;
  background: transparent;
  border: 2px solid #fff;
  margin: 1px;
  box-shadow: 4px 4px 16px 0 rgba(0, 0, 0, 0.4);
`;

const TodoLabel = styled.label`
  color: white;
  font-family: sans-serif;
  display: inline;
  padding: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: ${props => (props.done ? 'line-through' : 'none')};
`;

const TodoCheckbox = styled.input`
  display: inline-block;
  font-size: 2rem;
`;

const TodoItem = ({
  id,
  done,
  task,
  handleDeleteTask,
  handleCheckTask,
  handleEditMode
}) => (
  <TodoListElement key={id}>
    <Button danger onClick={() => handleDeleteTask(id)}>
      <b>×</b> delete
    </Button>
    <TodoCheckbox
      type="checkbox"
      checked={done ? 'checked' : ''}
      htmlFor={task.id}
      onChange={() => handleCheckTask(id)}
    />
    <TodoLabel id={task.id} done={done}>
      {task}
    </TodoLabel>
  </TodoListElement>
);

export default TodoItem;
