import React from 'react';
import classnames from 'classnames';

const InputField = ({ fieldName, placeholder, type, clearfix, children, className, ...rest }) => {

    const clear = classnames('field', { clearfix: !!clearfix });

    return (
        <div className={`field-wrapper ${type.toLowerCase()}`}>
            <div className={clear}>
                <input
                    placeholder={ placeholder }
                    type={type}
                    name={fieldName}
                    className={ className }
                    {...rest}
                />
                { children }
            </div>
        </div>
    );
};

export default InputField;