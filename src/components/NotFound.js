import React from 'react';

class NotFound extends React.Component {
    render() {
        return (
            <div className="container text-center">
                <div className="jumbotron">
                    <h2>404.. This page was not found!</h2>
                    <a href="/">Home</a>
                </div>
            </div>
        )
    }
}

export default NotFound

