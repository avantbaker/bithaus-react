import React, { Component } from 'react';
import classnames from 'classnames';

import SignInContainer from "./SignInContainer";

class SessionContainer extends Component {
    render() {
        const classNames = classnames('session', this.props.className);
        return (
            <div className={classNames}>
                <h2 className="header">{this.props.title}</h2>
                <SignInContainer />
            </div>
        )
    }
}

export default SessionContainer;