import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Aula1 from './1-component-element-styles/Forms'
import Aula2 from './2-redux-and-arch/components/Counter'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/styles-state-forms' component={Aula1} />
          <Route path='/redux-and-arch' component={Aula2} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
