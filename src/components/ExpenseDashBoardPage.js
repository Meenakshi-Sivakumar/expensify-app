import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilter';


const ExpenseDashBoardPage = () => (
    <div>
        <ExpenseListFilters/>
        <ExpensesList />
    </div>
);

export default ExpenseDashBoardPage;