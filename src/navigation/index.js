import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import SignInPage from '../components/pages/SignInPage';
import Dashboard from '../components/pages/DashboardPage';

class Navigator extends Component  {
    componentDidMount() {
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="app">
                <Route path="/" component={SignInPage} />
                <Route path="/dashboard" component={Dashboard} />
            </div>
        );
    }
}

export default withRouter(Navigator);