import React from 'react';
import logo from './logo.png';
import './App.css';
import {Forms} from "./components";

function App() {
  return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Forms/>
      </div>
  );
}

export default App;
