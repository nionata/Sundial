import React, { Component } from 'react';
import sundialLogo from '../assets/images/favicon-32x32.png';
import InputBoard from './InputBoard';
import ResultBoard from './ResultBoard';
import '../assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header text-center ">

          
          <h2> <img src={sundialLogo} className="App-logo " alt="logo" /> Sundial</h2>
        </div>
        <div className="App-body container">
          <InputBoard />
          <ResultBoard />
        </div>
      </div>
    );
  }
}

export default App;
