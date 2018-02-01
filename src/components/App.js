import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ApplicationNavigator from '../navigation';

// Eventually Will Be Replaced with a Router
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <ApplicationNavigator />
            </BrowserRouter>
        );
    }
}

export default App;
