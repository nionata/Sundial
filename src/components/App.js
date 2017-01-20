import React, { Component } from 'react';
import sundialLogo from '../assets/images/favicon-32x32.png';
import InputBoard from './InputBoard';
import ResultBoard from './ResultBoard';
import '../assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={sundialLogo} className="App-logo" alt="logo"/>
          <h2>Sundial</h2>
        </div>
         <div className="App-body">
          <InputBoard />
          <ResultBoard />
        </div>
      </div>
    );
  }
}

export default App;
