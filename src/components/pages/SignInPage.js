import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import HeaderContainer from '../containers/HeaderContainer';
import SessionContainer from '../containers/SessionContainer';

class SignInPage extends Component {

    constructor(props) {
        super(props);
        this.state = { redirectToReffer: false };
        this.login = this.login.bind(this);
    }

    login = () => {
        this.setState({ redirectToReffer: true });
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/dashboard'} };
        const { redirectToReffer } = this.state;

        if (redirectToReffer) return (<Redirect to={from} />);

        return (
            <div className="page-wrapper container">
                <HeaderContainer onLogoClick={this.login} />
                <SessionContainer title="Sign in to Bithaüs" />
            </div>
        );
    }
}

export default SignInPage;