import React from "react";

class InputBoard extends React.Component {
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
                        <tr>
                            <td>@musecode</td>
                            <td>+5</td>
                            <td>2pm - 4pm</td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" className="btn btn-default pull-right">Sundial!</button>
            </div>
        )
    }
}

export default InputBoard;