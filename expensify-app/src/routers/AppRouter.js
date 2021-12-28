import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { ExpenseHome } from '../components/Dashboard';
import { createExpensepage } from '../components/CreateExpense';
import { EditExpensepage } from '../components/EditExpense';
import { helpExpensepage } from '../components/Help';
import { notFoundpage } from '../components/NotFound';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={ExpenseHome} />
                    <Route path="/create" element={createExpensepage} />
                    <Route path="/edit" element = {<EditExpensepage/>} />
                    <Route path="/help" element={helpExpensepage} />
                    <Route path="*" element={notFoundpage} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;