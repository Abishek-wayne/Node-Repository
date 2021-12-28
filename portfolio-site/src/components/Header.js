import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Portfolio-Site</h1>
        <NavLink className={({ isActive }) => isActive ? "is-active" : ""} to="/">Dashboard</NavLink>
        <NavLink className={({ isActive }) => isActive ? "is-active" : ""} to="/create">Create Expense</NavLink>
        <NavLink className={({ isActive }) => isActive ? "is-active" : ""} to="/help">Help</NavLink>
    </div>
);

export { Header };