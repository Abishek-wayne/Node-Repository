import React from 'react';
import { Link } from 'react-router-dom';

const notFoundpage = (
    <div>
        <p>This is a 404 page</p>
        <Link to="/">Go Home Please</Link>
    </div>
);

export {notFoundpage};