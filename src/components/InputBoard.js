import React from "react";

class InputBoard extends React.Component {
    constructor(props) {
        super(props)
        this.renderInputForm = this.renderInputForm.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)
        this.renderMember = this.renderMember.bind(this)

        this.state = {
            toggleAddItem: true
        }
    }

    renderInputForm() {
        return (
            <tr>
                <td><input type="text" className="form-control" /></td>
                <td><input type="text" className="form-control" /></td>
                <td><input type="text" className="form-control" /></td>
            </tr>
        )
    }

    handleAddItem(e) {
        e.preventDefault()
        this.setState({
            toggleAddItem: !this.state.toggleAddItem
        })
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
                       
                        {this.state.toggleAddItem ? this.renderInputForm() : null}
                    </tbody>
                </table>
                <a href="#" onClick={this.handleAddItem}>Add more member...</a>
                <button type="button" className="btn btn-default pull-right">Sundial!</button>
            </div>
        )
    }
}

export default InputBoard;