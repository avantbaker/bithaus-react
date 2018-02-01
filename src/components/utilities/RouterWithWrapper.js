import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export const RouterWithWrapper = ({ children, ...rest }) => {
    return (
        <Router>
            <div {...rest}>
                { children }
            </div>
        </Router>
    );
};