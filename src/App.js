import React from 'react';
import { Component } from 'react'
import logo from './logo.svg';
import Dashboard from './Dashboard';

import './App.css';
import 'typeface-roboto';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Dashboard/>
      </div>
    );
  }
}

export default App;
