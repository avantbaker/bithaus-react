import React, { Component } from 'react';

import HeaderContainer from '../containers/HeaderContainer';
import SessionContainer from '../containers/SessionContainer';

class SignInPage extends Component {
    render() {
        return (
            <div className="page-wrapper container">
                <HeaderContainer />
                <SessionContainer title="Sign in to Bithaüs" />
            </div>
        );
    }
}

export default SignInPage;