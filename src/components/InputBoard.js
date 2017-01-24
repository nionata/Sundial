import React from "react";

class InputBoard extends React.Component {
    constructor(props) {
        super(props)
        this.renderInputForm = this.renderInputForm.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)
        this.renderMember = this.renderMember.bind(this)
        this.handleOnSave = this.handleOnSave.bind(this)

        //local state
        this.state = {
            isAddingItem: false //Booean value to enable or disable inputform
        }
    }

    renderInputForm() {
        return (
            <tr>
                <td><input type="text" ref="inputName" className="form-control" /></td>
                <td><input type="text" ref="inputTimezone" className="form-control" /></td>
                <td><input type="text" ref="inputAvailTime" className="form-control" /></td>
            </tr>
        )
    }

    renderMember(item, index) {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.timezone}</td>
                <td>{item.availTime}</td>
            </tr>
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
        const {inputName, inputTimezone, inputAvailTime} = this.refs

        if (inputName.value !== "") {
            const inputMember = {
                name: inputName.value,
                timezone: inputTimezone.value,
                availTime: inputAvailTime.value
            }
            //update redux state
            this.props.addMember(inputMember)
        }

    }

    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Timezone</th>
                            <th>Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.team.members.map(this.renderMember)}
                        {this.state.isAddingItem ? this.renderInputForm() : null}
                    </tbody>
                </table>
                {
                    this.state.isAddingItem ? (
                        <button type="button" className="btn btn-default pull-right" onClick={this.handleOnSave}>Save</button>
                    ) : (
                            <div>
                                <a href="#" onClick={this.handleAddItem}>Add more member...</a>
                                <button type="button" className="btn btn-default pull-right">Sundial!</button>
                            </div>
                        )
                }
            </div>
        )
    }
}

InputBoard.PropTypes = {
    team: React.PropTypes.object,
    addMember: React.PropTypes.func
}

export default InputBoard;