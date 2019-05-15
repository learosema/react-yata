import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: ${props => (props.danger ? 'crimson' : 'transparent')};
  color: ${props => (props.danger ? 'white' : 'white')};
  padding: 4px;
  font-size: 1rem;
  border: 4px solid white;
  font-weight: bold;

  &:hover {
    background: ${props =>
      props.danger ? 'salmon' : 'rgba(255, 255 ,255, .5);'};
  }

  &:focus, &:active {
    outline: 2px solid #f0f;
  }
`;

export default Button;
