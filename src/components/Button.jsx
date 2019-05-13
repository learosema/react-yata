import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.danger ? 'crimson' : 'transparent')};
  color: ${props => (props.danger ? 'white' : 'white')};
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid ${props => (props.danger ? 'darkred' : 'white')};
  font-weight: bold;

  &:hover {
    background: ${props =>
      props.danger ? 'salmon' : 'rgba(255, 255 ,255, .5);'};
  }
`;

export default Button;
