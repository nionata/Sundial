import React, { Component } from 'react';
import sundialLogo from '../assets/images/favicon-32x32.png';
import InputBoard from '../components/InputBoard.js'
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/styles/App.css'


class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="App-header text-center ">
          <h2> <img src={sundialLogo} className="App-logo " alt="logo" /> Sundial</h2>
        </div>
        <div className="text-center">
          <h1>Team</h1>
          <h1>Meerkat Sundial</h1>
        </div>
        <div className="container App-body">
          <div className="App-input-board-container">
            <InputBoard id={this.props.params.id}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
