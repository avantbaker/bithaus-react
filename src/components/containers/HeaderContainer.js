import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderContainer extends Component {
    render() {
        return (
            <header className="header">
                <h1 onClick={this.props.onLogoClick} className="title m-collapse">bithaüs</h1>
            </header>
        )
    }
}

export default HeaderContainer;