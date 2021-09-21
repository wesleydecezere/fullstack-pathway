import Item from './components/Item'
import Card from './components/Card'

function App() {
  const listItems = []

  for (let i = 0; i < 3; i++) {
    listItems.push(<Item>{`Item ${i + 1}`}</Item>)
  }

  return (
    <>
      <h1>Minha segunda aplicação com ReactJS</h1>
      <p>Meu parágrafo</p>
      <ul>
        {listItems}
      </ul>
      <Card></Card>
    </>
  )
}

export default App;
