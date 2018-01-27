import React, { Component } from 'react';
import InputField from '../pieces/InputField';
import LabelCheckbox from '../pieces/LabelCheckbox';

class RegisterForm extends Component {
    render() {
        return (
            <form className="form-vertical">
                <InputField
                    fieldName="email"
                    type="email"
                    placeholder="email"
                    className="focus text-field"
                />
                <InputField
                    fieldName="password"
                    type="password"
                    placeholder="password"
                    className="focus text-field"
                />
                <InputField
                    fieldName="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="focus text-field"
                />
                <InputField
                    fieldName="commit"
                    type="submit"
                    placeholder="password"
                    value="Sign In"
                    className="btn btn-primary pull-right submit"
                >
                    <LabelCheckbox htmlFor="commit" name="stay_signed_in">
                        Keep me signed in on this computer
                    </LabelCheckbox>
                </InputField>
            </form>
        );
    }
}

export default RegisterForm;