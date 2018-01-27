import React, { Component } from 'react';
import SignInContainer from "./SignInContainer";

class SessionContainer extends Component {
    render() {
        return (
            <div className="session">
                <h2 className="header">{this.props.title}</h2>
                <SignInContainer />
            </div>
        )
    }
}

export default SessionContainer;