import React from 'react';

class ResultBoard extends React.Component {
    constructor(props) {
        super(props)
        this.milToStandard = this.milToStandard.bind(this)

        this.state = {
            isLoading: true,
            isAvail: true,
            isEmpty: true,
            teamStart: "",
            teamEnd: ""
        }
    }

    milToStandard(hour, minutes) {
        if(this.props.members.length > 1) {
            this.setState({
                isEmpty: false
            })
        }

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
        //Temp Availability variables - Will be tested against members and changed
        var tempTeamStartHours = Number.MIN_SAFE_INTEGER
        var tempTeamStartMinutes = Number.MIN_SAFE_INTEGER
        var tempTeamEndHours = Number.MAX_SAFE_INTEGER
        var tempTeamEndMinutes = Number.MAX_SAFE_INTEGER

        //Timezone difference between current location based
        var rawTimeData = new Date().getTimezoneOffset();
        var currentZone = rawTimeData / -60;

        //Convert from each members time to users timezone
        this.props.members.forEach(function(element) {
            var memZone = parseInt(element["timeZone"], 10);
            var conversionFactor = currentZone - memZone;

            var memStartHours = parseInt(element["availTimeStart"].substring(0,2), 10) + conversionFactor
            var memStartMinutes = parseInt(element["availTimeStart"].substring(3,5), 10)
            var memEndHours = parseInt(element["availTimeEnd"].substring(0,2), 10) + conversionFactor
            var memEndMinutes = parseInt(element["availTimeEnd"].substring(3,5), 10)

            if(memStartHours > tempTeamStartHours) {
                tempTeamStartHours = memStartHours
                tempTeamStartMinutes = memStartMinutes
            } else if(memStartHours === tempTeamStartHours) {
                if(memStartMinutes > tempTeamStartMinutes) {
                    tempTeamStartMinutes = memStartMinutes
                }
            }

            if(memEndHours < tempTeamEndHours) {
                tempTeamEndHours = memEndHours
                tempTeamEndMinutes = memEndMinutes
            } else if(memEndHours === tempTeamEndHours) {
                if(memEndMinutes < tempTeamEndMinutes) {
                    tempTeamEndMinutes = memEndMinutes
                }
            }
        });

        if(tempTeamStartHours > tempTeamEndHours) {
            this.setState({
                isLoading: false,
                isAvail: false
            })
            return
        } else if(tempTeamStartHours === tempTeamEndHours) {
            if(tempTeamStartMinutes > tempTeamEndMinutes) {
                this.setState({
                    isLoading: false,
                    isAvail: false
                })
                return
            }
        }

        if((tempTeamStartMinutes + "").length === 1) {
            tempTeamStartMinutes = "0" + tempTeamStartMinutes
        }

        if((tempTeamEndMinutes + "").length === 1) {
            tempTeamEndMinutes = "0" + tempTeamEndMinutes
        }

        this.setState({
            isLoading: false,
            isAvail: true,
            teamStart: this.milToStandard(tempTeamStartHours, tempTeamStartMinutes),
            teamEnd: this.milToStandard(tempTeamEndHours, tempTeamEndMinutes)
        })
    }

    render() {
        return (
            <div className="container text-center">
                <div className="jumbotron">
                    <h2>Your Team's Availability</h2>
                    {
                        !this.state.isLoading ? (
                            !this.state.isEmpty ? (
                                this.state.isAvail ? (
                                    <p>Your team is available between {this.state.teamStart} and {this.state.teamEnd} your time!</p>
                                ) : (
                                    <p>There is no availability between the team.</p>
                                )
                            ) : (
                                <p>Two or more members are required to check availability!</p>
                            )
                        ) : (
                            <p>Loading.</p>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default ResultBoard
