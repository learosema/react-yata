import React from 'react';
import styled from 'styled-components';

const InputBox = styled.input`
  padding: 8px;
  width: 50%;
  border: 2px solid ${props => (props.danger ? 'darkred' : 'darkblue')};
`;

export default InputBox;
