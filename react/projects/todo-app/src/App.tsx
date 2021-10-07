import React, { useState } from 'react';
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

type Task = {
  description: string;
  checked: boolean;
}


function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const handleSubmit = (value: string): void => {
    // if (e.type === 'click' || (e as KeyboardEvent).key === 'Enter') {
    value && setTasks(tasks.concat([{
      description: value,
      checked: false,
    }]))
    // }
  }

  return (
    <Container className="App">
      <Title>Lista de Tarefas</Title>
      <HorizontalLine />
      <Input onSubmit={handleSubmit} />
      {tasks.map((task, idx) => <Item key={idx}>{task.description}</Item>)}
    </Container>
  );
}

export default App;
