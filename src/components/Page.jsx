import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/coffee-background.jpg';

const Page = styled.div`
  color: white;
  padding: 1rem;
  background: rgb(80, 20, 130);
  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-size: cover;
  background-attachment: fixed;
  width: 100vw;
  min-height: 100vh;
  display: block;
`;

export default Page;
