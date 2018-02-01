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
            <div className="page-wrapper bg-primary">
                <div className="container-fluid bg-primary m-collapse p-collapse">
                    <HeaderContainer
                        className="container"
                        onLogoClick={this.login}
                    />
                    <SessionContainer
                        className="container"
                        title="Sign in to Bithaüs"
                    />
                </div>
            </div>
        );
    }
}

export default SignInPage;