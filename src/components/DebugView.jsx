import React from 'react';
import styled from 'styled-components';

const DebugView = styled.pre`
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  position: absolute;
  margin: 0;
  padding: 2em;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20vh;
  overflow: auto;
`;

export default DebugView;