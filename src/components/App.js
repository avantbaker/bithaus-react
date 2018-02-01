import React, { Component } from 'react';
import {
    Route,
} from 'react-router-dom';

import SignInPage from './pages/SignInPage';
import RouterWithWrapper from './utilities/RouterWithWrapper';

const Dashboard = (props) => {
    return (
        <h3>Dashboard</h3>
    );
};

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
