import React from 'react';

const listCustomer = [
  {
    id: 1,
    name: 'Nome 1',
    skills: ['React', 'Node', 'CSS', 'Webpack']
  },
  {
    id: 2,
    name: 'Nome 2',
    skills: ['HTML', 'React Native', 'CSS', 'Webpack']
  },
  {
    id: 3,
    name: 'Nome 3',
    skills: ['Assembly']
  },
  {
    id: 4,
    name: 'Nome 4',
    skills: ['Reason']
  }
];

const App = () => {
  const renderSkills = (skill, index) => {
    return (
      <li key={`skill-${index}`}>{skill}</li>
    );
  };

  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}</li>
        <ul>
          {customer.skills.map(renderSkills)}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1>Full-Stack Pathway</h1>
      <p>Introdução ao ReactJS</p>
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div >
  );
};

export default App;