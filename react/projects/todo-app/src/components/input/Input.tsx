import styled from 'styled-components';

const InputContainer = styled.div`
  border-radius: 10px;
  border: 1px solid gray;
  overflow: hidden;
  display: flex;
  height: 3rem;
  margin: 20px 0;
`;

const InputButton = styled.button`
  background-color: transparent;
  color: white; 
  border: none;
  cursor: pointer;
  font-size: 2.5rem;
  width: 3rem;

  &:after {
    content: '+';
  }
`;

const InputField = styled.input`
  background-color: transparent;
  color: white;
  border: none;
  flex-grow: 1;
  padding-left: 0px;
  font-size: 1rem;

  &:focus-visible {
  outline: none;
  }
`;

export const Input = () => (
  <InputContainer>
    <InputButton />
    <InputField type='text' placeholder="Adicione uma tarefa" />
  </InputContainer>
);
