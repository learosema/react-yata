import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.danger ? 'crimson' : 'transparent')};
  color: ${props => (props.danger ? 'white' : 'darkblue')};
  padding: 0.5rem 0;
  margin: 0.5rem;
  width: 10rem;
  border: 2px solid ${props => (props.danger ? 'darkred' : 'darkblue')};
  font-weight: bold;

  &:hover {
    background: ${props => (props.danger ? 'salmon' : 'rgba(0,0,0,.2);')};
  }
`;

export default Button;
