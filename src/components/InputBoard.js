import React from "react";
import * as firebase from 'firebase';
import ResultBoard from '../components/ResultBoard.js'
import '../assets/styles/App.css'

class InputBoard extends React.Component {
    constructor(props) {
        super(props)
        this.renderInputForm = this.renderInputForm.bind(this)
        this.renderMember = this.renderMember.bind(this)
        this.renderResultBoard = this.renderResultBoard.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)
        this.handleOnSave = this.handleOnSave.bind(this)
        this.handleOnSundial = this.handleOnSundial.bind(this)
        this.milToStandard = this.milToStandard.bind(this)

        //local state
        this.state = {
            team: {
                name: "",
                members: []
            },
            isAddingItem: false, //Booean value to enable or disable inputform
            isSundialActivated: false
        }
    }

    renderInputForm() {
        return (
            <tr>
                <td><input type="text" ref="inputName" className="form-control" placeholder="Full Name (ex. John Doe)"/></td>
                <td><input type="time" ref="inputAvailTimeStart" className="form-control" placeholder="Start Time (ex. 1)"/></td>
                <td><input type="time" ref="inputAvailTimeEnd" className="form-control" placeholder="End Time (ex. 5)"/></td>
            </tr>
        )
    }

    renderMember(item, index) {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{this.milToStandard(item.availTimeStart)}</td>
                <td>{this.milToStandard(item.availTimeEnd)}</td>
            </tr>
        )
    }

    renderResultBoard() {
        return (
            <div className="container App-body">
                <ResultBoard/>
            </div>
        )
    }

    handleAddItem(e) {
        e.preventDefault()
        this.setState({
            isAddingItem: !this.state.isAddingItem
        })
    }

    handleOnSave(e) {
        e.preventDefault()

        //collect user input
        const {inputName, inputAvailTimeStart, inputAvailTimeEnd} = this.refs

        if (inputName.value !== "" && inputAvailTimeStart.value !== "" && inputAvailTimeEnd.value !== "") {
            var startHour = inputAvailTimeStart.value.substring ( 0,2 ); //Extract hour
            var startMinutes = inputAvailTimeStart.value.substring ( 3,5 ); //Extract minutes

            var endHour = inputAvailTimeEnd.value.substring ( 0,2 ); //Extract hour
            var endMinutes = inputAvailTimeEnd.value.substring ( 3,5 ); //Extract minutes

            if(parseInt(startHour) > parseInt(endHour)) {
                alert("Your start time is after your end time!")
                return
            } else if(parseInt(startHour) === parseInt(endHour)) {
                if(parseInt(startMinutes) > parseInt(endMinutes)) {
                    alert("Your start time is after your end time!")
                    return
                }
            }

            const ref = firebase.database().ref().child("teams").child(this.props.id).child("members")

            ref.push({
                name: inputName.value,
                timeZone: new Date().getTimezoneOffset() / -60,
                availTimeStart: inputAvailTimeStart.value,
                availTimeEnd: inputAvailTimeEnd.value
            })

            this.setState({
                isAddingItem: !this.state.isAddingItem
            })
        } else {
            alert("Make sure to fill every field in!")
        }
    }

    handleOnSundial(e) {
        e.preventDefault()
        this.setState({
            isSundialActivated: !this.state.isSundialActivated
        })
    }

    milToStandard(value) {
        var hour = value.substring ( 0,2 ); //Extract hour
        var minutes = value.substring ( 3,5 ); //Extract minutes
        var identifier = 'AM'; //Initialize AM PM identifier

        if(hour === 12){ //If hour is 12 then should set AM PM identifier to PM
            identifier = 'PM';
        }

        if(hour === 0){ //If hour is 0 then set to 12 for standard time 12 AM
            hour = 12;
        }

        if(hour > 12){ //If hour is greater than 12 then convert to standard 12 hour format and set the AM PM identifier to PM
            hour -= 12;
            identifier = 'PM';
        }

        return hour + ':' + minutes + ' ' + identifier; //Return the constructed standard time
    }

    componentDidMount() {
        const ref = firebase.database().ref().child("teams").child(this.props.id)
        ref.on('value', snap => {
            if(snap.val() != null) {
                if(snap.val().members !== undefined) {
                    var tempMembers = []

                    snap.child("members").forEach(function(childSnap) {
                        tempMembers.push(childSnap.val())
                    })

                    this.setState({
                        team: {
                            name: snap.val().name,
                            members: tempMembers
                        }
                    })
                } else {
                    this.setState({
                        team: {
                            name: snap.val().name,
                            members: []
                        }
                    })
                }
            }
        })
    }

    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Availability Start</th>
                            <th>Availability End</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.team.members.map(this.renderMember)}
                        {this.state.isAddingItem ? this.renderInputForm() : null}
                    </tbody>
                </table>
                {
                    this.state.isAddingItem ? (
                        <button type="button" className="btn btn-default pull-right" onClick={this.handleOnSave}>Save</button>
                    ) : (
                            <div>
                                <a href="#" onClick={this.handleAddItem}>Add a teamate...</a>
                                <button type="button" className="btn btn-default pull-right" onClick={this.handleOnSundial}>Sundial!</button>
                            </div>
                    )
                }
                {this.state.isSundialActivated ? this.renderResultBoard() : null}
            </div>
        )
    }
}

export default InputBoard;
