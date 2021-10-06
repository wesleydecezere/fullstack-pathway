import styled from 'styled-components';

const ItemContainer = styled.div`
  border-radius: 5px;
  height: 3.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 0.5em;
`;
const ItemCheckbox = styled.input`
  height: 1.5rem;
  width: 1.5rem;
  margin: 0;
`;
const ItemLabel = styled.label`
  flex-grow: 1;
  font-size: 1.5rem;
  margin-left: 0.5rem;
`;

type Props = {
  children: string;
}

export const Item = ({ children }: Props): JSX.Element => {
  return (
    <ItemContainer>
      <ItemCheckbox id='check' type="checkbox"></ItemCheckbox>
      <ItemLabel htmlFor="check">{children}</ItemLabel>
    </ItemContainer>
  )
};