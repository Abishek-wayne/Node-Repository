import React from 'react';
import { Link } from 'react-router-dom';

const createExpensepage = (
    <div>
    <p>This is for Creating Portfolio</p>
    <Link to="/showExpense?id=1">Item 1</Link>
    <Link to="/showExpense?id=2">Item 2</Link>
    </div>
);

export {createExpensepage};