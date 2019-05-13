import React from 'react';
import styled from 'styled-components';

const InputBox = styled.input`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-family: sans-serif;
  font-size: 1rem;
  padding: 0.5rem;
  border: 2px solid ${props => (props.danger ? 'darkred' : 'white')};


  &::placeholder {
    color: #ff77ff;
  }
`;

export default InputBox;
