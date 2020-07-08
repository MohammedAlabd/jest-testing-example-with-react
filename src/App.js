import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Main logMe={console.log}/>
    </div>
  );
}

export default App;
