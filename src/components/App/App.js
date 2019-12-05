import React from 'react';

import './App.css';
import Dashboard from '../Dashboard/Dashboard'
import Owners from '../Owners/Owners'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PET HOTEL</h1>
      </header>
      <Dashboard />
      <Owners />
    </div>
  );
}

export default App;
