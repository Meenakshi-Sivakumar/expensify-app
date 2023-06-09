import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpensesListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount}-{createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
}

export default connect(mapStateToProps)(ExpensesListItem);