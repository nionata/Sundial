import React, {Component} from 'react';
import './generatelink.css';
import * as firebase from 'firebase';

class GenerateLink extends Component {
    constructor(props) {
        super(props)
        this.onGenLink = this.onGenLink.bind(this)
    }

    onGenLink(e) {
        e.preventDefault()
        const ref = firebase.database().ref().child("teams")
        const newRef = ref.push()
        const inputName = this.refs.inputName

        if(inputName.value !== "") {
            newRef.set({
                name: inputName.value
            }).then(function() {
                //this.props.router.push("/Sundial/team/" + newRef.key)
                window.location.replace("/Sundial/team/" + newRef.key)
            })
        } else {
            alert("You didn't enter a team name!");
        }
    }

  render() {
    return (
      <section id="generate-link">
        <div>
          <h2 className="section-title">Enter a team name below to get started!</h2>
          <input type="text" ref="inputName" className="form" placeholder="Team Name (ex. Sundial)"/>
          <br/>
          <button onClick={this.onGenLink}>Create Team</button>
        </div>
      </section>
    );
  }
}

export default GenerateLink;
