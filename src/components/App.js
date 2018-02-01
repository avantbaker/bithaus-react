import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import RouterWithWrapper from './utilities/RouterWithWrapper';

import SignInPage from './pages/SignInPage';
import Dashboard from './pages/DashboardPage';

// Eventually Will Be Replaced with a Router
class App extends Component {
    render() {
        return (
            <RouterWithWrapper className="app">
                <Route path="/" component={SignInPage} />
                <Route path="/dashboard" component={Dashboard} />
            </RouterWithWrapper>
        );
    }
}

export default App;
