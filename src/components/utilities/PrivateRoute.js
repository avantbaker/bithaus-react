import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {

    const handleRender = props => {

        if (isAuthenticated) {
            return (<Component {...props} />);
        }

        const routeInfo = {
            pathname: '/',
            state: { from: props.location }
        };

        return (<Redirect to={routeInfo} />);
    };

    return ( <Route {...rest} render={handleRender} /> );

};

export default PrivateRoute;