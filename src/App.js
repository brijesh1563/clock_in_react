import React from 'react';
import logo from './logo.svg';
import './App.css';
import Watch from './Components/Watch'
import ParentCount from './Components/ParentCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Watch/>
        </h1>
        <ParentCount/>
      </header>
    </div>
  );
}

export default App;
