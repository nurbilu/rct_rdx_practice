import React from 'react';
import logo from './logo.svg';
import Cnt from './features/counter/Cnt';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Cnt></Cnt>
      </header>
    </div>
  );
}

export default App;
