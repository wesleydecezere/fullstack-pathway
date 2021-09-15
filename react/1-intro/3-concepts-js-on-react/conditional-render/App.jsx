import React from 'react';

const buttonA = <button>Histórico dos clientes</button>;
const buttonB = <button>Cadastrar cliente</button>;

const hasCustomer = false;

const App = () => {
  const renderShowHistory = (
    <div>
      Clique no botão abaixo para visualizar o histórico dos clientes
      <br />
      {buttonA}
    </div>
  );

  const renderAddCustomer = (
    <div>
      Clique abaixo para cadastrar o clientes
      <br />
      {buttonB}
    </div>
  );

  const showCustomer = () => {
    if (!hasCustomer) return null;

    return <div>
      <h1>Nome do cliente: Wesley Decezere</h1>
    </div>;
  };

  return (
    <div>
      <h1>Full-Stack Pathway</h1>
      <p>Introdução ao ReactJS</p>
      {hasCustomer && <p>Cachorro</p>}
      {hasCustomer ? renderShowHistory : renderAddCustomer}
      <div>
        {showCustomer()}
      </div>
    </div >
  );
};

export default App;