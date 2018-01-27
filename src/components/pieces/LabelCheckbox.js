import React from 'react';
import classnames from 'classnames';

const labelCheckbox = ({ name, htmlFor, children, className, inputClass, ...rest }) => {

    const wrapperClasses = classnames('check-box', className);
    const fieldClasses = classnames('check-box', inputClass);

    return (
        <label htmlFor={htmlFor} className={wrapperClasses}>
            <input
                type="checkbox"
                className={fieldClasses}
                name={ name }
                { ...rest }
            />
            { children }
        </label>
    );
};

export default labelCheckbox;