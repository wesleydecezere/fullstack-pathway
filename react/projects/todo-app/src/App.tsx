import React from 'react';
import styled from 'styled-components';
import { Input, Item } from './components';

const Container = styled.div`
  width: 60vw;
  margin: auto;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
`;
const HorizontalLine = styled.div` 
  width: 100%;
  height: 1px;
  background-color: gray;
`;

function App() {
  return (
    <Container className="App">
      <Title>Lista de Tarefas</Title>
      <HorizontalLine />
      <Input />
      <Item>Item 1</Item>
    </Container>
  );
}

export default App;
