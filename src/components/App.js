import React, { Component } from 'react';
import sundialLogo from '../assets/images/favicon-32x32.png';
import InputBoard from '../components/InputBoard.js'
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/styles/App.css'
import * as firebase from 'firebase';

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            real: true
        }
    }

    componentDidMount() {
        const ref = firebase.database().ref().child("teams").child(this.props.params.id)
        ref.on('value', snap => {
            if(snap.val() != null) {
                this.setState({
                    name: snap.child("name").val()
                })
            } else {
                this.setState({
                    real: false
                })
            }
        });
    }

  render() {
    return (
      <div className="App-container">
        <div className="App-header text-center ">
          <a href="/Sundial/" className="Link-top">
            <h2>
              <img src={sundialLogo} className="App-logo " alt="logo" /> Sundial
            </h2>
          </a>
        </div>
        {
            this.state.real ? (
                <div>
                    <div className="text-center">
                        <h1>Team</h1>
                        <h1>{this.state.name}</h1>
                    </div>
                    <div className="container App-body">
                        <div className="App-input-board-container">
                            <InputBoard id={this.props.params.id}/>
                        </div>
                    </div>
                </div>
            ) : (
                <h1 className="text-center">404.. Team not found!</h1>
            )
        }
      </div>
    );
  }
}

export default App;
