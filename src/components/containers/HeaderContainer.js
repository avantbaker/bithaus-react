import React, { Component } from 'react';
import classnames from 'classnames';

class HeaderContainer extends Component {
    render() {
        const classNames = classnames('header', this.props.className);
        return (
            <header className={classNames}>
                <h1 onClick={this.props.onLogoClick} className="m-collapse">bithaüs</h1>
            </header>
        )
    }
}

export default HeaderContainer;