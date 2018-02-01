import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export default ({ children, ...rest }) => {
    return (
        <Router>
            <div {...rest}>
                { children }
            </div>
        </Router>
    );
};