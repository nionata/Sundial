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

        console.log(this.props.id)

        //local state
        this.state = {
            team: {
                "name": "Meerkat Sundial",
                "members": [
                /*{
                    "name": "@musecode",
                    "availTimeStart": "5",
                    "availTimeEnd": "10",
                    "timezone": "+12"
                },
                {
                    "name": "@nionata",
                    "availTimeStart": "5",
                    "availTimeEnd": "10",
                    "timezone": "-5"
                },
                 {
                    "name": "@ejour",
                    "availTimeStart": "5",
                    "availTimeEnd": "10",
                    "timezone": "+8"
                }*/
                ]
            },
            isAddingItem: false, //Booean value to enable or disable inputform
            isSundialActivated: false
        }
    }

    renderInputForm() {
        return (
            <tr>
                <td><input type="text" ref="inputName" className="form-control" placeholder="Full Name (ex. John Doe)"/></td>
                <td><input type="text" ref="inputTimezone" className="form-control" placeholder="From GMT (ex. -5)"/></td>
                <td><input type="text" ref="inputAvailTimeStart" className="form-control" placeholder="Start Time (ex. 1)"/></td>
                <td><input type="text" ref="inputAvailTimeEnd" className="form-control" placeholder="End Time (ex. 5)"/></td>
            </tr>
        )
    }

    renderMember(item, index) {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.timezone}</td>
                <td>{item.availTimeStart}</td>
                <td>{item.availTimeEnd}</td>
            </tr>
        )
    }

    renderResultBoard() {
        return (
            <div className="container App-body">
                <ResultBoard />
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
        this.setState({
            isAddingItem: !this.state.isAddingItem
        })

        //collect user input
        const {inputName, inputTimezone, inputAvailTimeStart, inputAvailTimeEnd} = this.refs

        if (inputName.value !== "") {
            const inputMember = {
                name: inputName.value,
                timezone: inputTimezone.value,
                availTimeStart: inputAvailTimeStart.value,
                availTimeEnd: inputAvailTimeEnd.value
            }
            this.state.team.members.push(inputMember)
        }

        var offset = new Date().getTimezoneOffset()/60;
        console.log(offset);

        //console.log(this.state.team);

    }

    handleOnSundial(e) {
        e.preventDefault()
        this.setState({
            isSundialActivated: !this.state.isSundialActivated
        })
    }

    componentDidMount() {
        const ref = firebase.database().ref().child("teams").child("-23523423422")
        ref.on('value', snap => {
            this.setState( {
                team: {
                "name": "Meerkat Sundial",
                "id": "random String",
                "members": [
                /*{
                    "name": "@musecode",
                    "availTimeStart": "5",
                    "availTimeEnd": "10",
                    "timezone": "+12"
                },
                {
                    "name": "@nionata",
                    "availTimeStart": "5",
                    "availTimeEnd": "10",
                    "timezone": "-5"
                },
                 {
                    "name": "@ejour",
                    "availTimeStart": "5",
                    "availTimeEnd": "10",
                    "timezone": "+8"
                }*/
                ]
            }
            });
        });
    }

    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Timezone</th>
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
