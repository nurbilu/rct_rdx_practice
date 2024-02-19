import React from 'react';
import logo from './logo.svg';
import Cnt from './features/counter/Cnt';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Cnt></Cnt>
      <Login></Login>
      <Register></Register>
      </header>
    </div>
  );
}

export default App;
