import React from 'react';
import InputBox from './InputBox';
import Button from './Button';

const TodoForm = ({input, handleFormSubmit, handleInput}) => (
  <form onSubmit={handleFormSubmit}>
    <div className="input-header">
      <InputBox
        placeholder="enter"
        onChange={handleInput}
        value={input}
        required
      />
      <Button> add TODO </Button>
    </div>
  </form>
);
export default TodoForm