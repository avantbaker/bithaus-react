import React, { Component } from 'react';
import HeaderContainer from "../containers/HeaderContainer";

export default (props) => {
    return (
        <div className="page-wrapper">
            <div className="container-fluid bg-primary m-collapse p-collapse">
                <HeaderContainer className="container"/>
            </div>
        </div>
    );
};