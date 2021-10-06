import styled from 'styled-components'

const Container = styled.div`
  width: 60vw;
  margin: auto;
`
const Title = styled.h1`
  text-align: center;
`

const Input = styled.div`
  border-radius: 10px;
  border: 1px solid gray;
  overflow: hidden;
  display: flex;
  height: 30px;
  margin: 15px 0;
`
const PlusButton = styled.button`
  background-color: transparent;
  color: white; 
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  width: 30px;

  &:after {
    content: '+';
  }
`

const InputField = styled.input`
  background-color: transparent;
  color: white;
  border: none;
  flex: 1;
  padding-left: 0px;

  &:focus-visible {
    outline: none;
  }
`

const HorizontalLine = styled.div` 
  width: 100%;
  height: 1px;
  background-color: gray;
`

function App() {
  return (
    <Container className="App">
      <Title>Lista de Tarefas</Title>
      <HorizontalLine />
      <Input>
        <PlusButton />
        <InputField placeholder='Adicione uma tarefa'></InputField>
      </Input>
    </Container>
  );
}

export default App;
