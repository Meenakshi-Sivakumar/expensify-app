import React from "react";
import { connect } from 'react-redux';
import ExpensesListItem from "./ExpensesListItem";
import selectExpense from "../selectors/expenses";

const  ExpensesList = (props)  => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expenses)=> {
            return <ExpensesListItem key= {expenses.id} {...expenses}/>
        })} 
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpense(state.expenses, {...state.filters})
    };
}

export default connect(mapStateToProps)(ExpensesList);
