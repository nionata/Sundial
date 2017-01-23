import React from "react";

class InputBoard extends React.Component {
    constructor(props) {
        super(props)
        this.renderInputForm = this.renderInputForm.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)

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

    handleAddItem(e){
        e.preventDefault()
        this.setState({
            toggleAddItem: !this.state.toggleAddItem
        })
    }

    render() {
        return (
            <div className="container">
                <table className="table table-stripe">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Timezones</th>
                            <th>Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>@ejour</td>
                            <td>+8</td>
                            <td>2pm - 4pm</td>
                        </tr>
                        <tr>
                            <td>@nionata</td>
                            <td>-2</td>
                            <td>2pm - 4pm</td>
                        </tr>
                        {this.state.toggleAddItem ? this.renderInputForm() : null}
                    </tbody>
                </table>
                <a href="#" onClick={this.handleAddItem}>add item</a>
                <button type="button" className="btn btn-default pull-right">Sundial!</button>
            </div>
        )
    }
}

export default InputBoard;