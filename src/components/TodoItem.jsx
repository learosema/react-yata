import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const TodoListElement = styled.li`
  display: block;
  padding: 2em;
  border-radius: 2px;
  background: papayawhip;
  margin: 4px 0;
  box-shadow: 4px 4px 16px 0 rgba(0, 0, 0, 0.4);
`;

const TodoLabel = styled.label`
  color: royalblue;
  font-family: cursive;
  display: inline;
  padding: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: ${props => (props.done ? 'line-through' : 'none')};
`;

const TodoCheckbox = styled.input`
  display: inline-block;
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
