import React from "react";

export const Header = (props) => (
        <div className="header">
        <div className="container">
        <h1 className="header__title">{props.title}</h1>
        <h3 className="header_subtitle">{props.subtitle}</h3>
        </div>
    </div>
    );