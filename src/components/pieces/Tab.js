import React, { Component } from 'react';
import classnames from 'classnames';

const Tab = ({ form, active, className, component, handleClick }) => {
    const classNames = classnames('tab', className, { active: form === active });
    return (
        <div
            onClick={() => handleClick(form, component)}
            className={ classNames }
        >
            <h2>{ form }</h2>
        </div>
    )
};

export default Tab;