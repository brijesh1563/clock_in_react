import React from 'react';
import logo from './logo.svg';
import './App.css';
import Watch from './Components/Watch'
import ParentCount from './Components/ParentCount'
import ComponentA from './Components/ContextExample/ComponentA'
import ComponentB from './Components/ContextExample/ComponentB';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Watch/>
        </h1>
        <ParentCount/>
        <ComponentA />
        <ComponentB/>
      </header>
    </div>
  );
}

export default App;
