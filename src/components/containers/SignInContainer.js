import React, { Component } from 'react';

import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';
import Tab from '../pieces/Tab';

class SignInContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form: null,
            active: null
        };

        this.setActiveForm = this.setActiveForm.bind(this);
    }

    componentDidMount() {
        this.setActiveForm('Login', LoginForm);
    }

    setActiveForm(form, component) {
        this.setState({ active: form, form: component });
    }

    renderForm() {
        const { form: Component } = this.state;
        return Component && (<Component />);
    }

    render() {
        const { active } = this.state;
        return (
            <div className="account-form">
                <div className="tabs-wrapper clearfix">
                    <Tab
                        form="Login"
                        className="col-xs-6"
                        component={LoginForm}
                        handleClick={this.setActiveForm}
                        active={active}
                    />
                    <Tab
                        form="Register"
                        className="col-xs-6"
                        component={RegisterForm}
                        handleClick={this.setActiveForm}
                        active={active}
                    />
                </div>
                <div className="form">
                    { this.renderForm() }
                </div>
            </div>
        );
    }
}

export default SignInContainer;