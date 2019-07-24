import React from 'react';
import './App.css';

const fun = () => {
  return 10 * x;
};

const App = () => {
  return (
    <h1 style={{ textAlign: 'center' }}>
      Hello React Starter! 🚀 Fun: {fun()}
    </h1>
  );
};

export default App;
