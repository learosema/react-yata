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
  text-decoration: ${props => (props.done ? 'line-through' : 'none')};
`;

const TodoCheckbox = styled.input`
  margin-right: .25rem;
  appearance: none;
  outline: none;

  &::after {
    cursor: pointer;
    text-align: center;
    padding: 4px;
    color: rgba(0,0,0,.0);
    background: #000;
    font-size: 1rem;
    border: 4px solid #fff;
    font-weight: bold;
    content: '✓';
  }

  &:active::after,
  &:focus::after {
    outline: 2px solid #f0f;
  }

  &:hover::after {
    background: rgba(255,255,255,.2);
  }

  &:checked::after {
    background: #3a2;
    color: #fff;
  }

  &:checked:hover::after {
    background: #4b3;
  }
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
      title="click to toggle"
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
