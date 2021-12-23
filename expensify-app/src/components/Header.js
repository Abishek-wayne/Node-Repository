import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink className={ ({isActive}) => isActive ? "is-active":"" } to="/">Home</NavLink>
        <NavLink className={ ({isActive}) => isActive ? "is-active":"" } to="/create">Create</NavLink>
        <NavLink className={ ({isActive}) => isActive ? "is-active":"" } to="/help">Help</NavLink>
        <NavLink className={ ({isActive}) => isActive ? "is-active":"" } to="/edit">Edit</NavLink>
    </div>
);

export {Header};