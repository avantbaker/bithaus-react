import React, { Component } from 'react';

import SignInPage from './pages/SignInPage';

// Eventually Will Be Replaced with a Router
class App extends Component {
    render() {
        return (
            <div className="app">
                <SignInPage />
            </div>
        );
    }
}

export default App;
