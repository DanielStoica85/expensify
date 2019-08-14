import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// 1. Create the basic component
export const ExpenseList = props => {
    return (
        <div>
            {props.expenses.length === 0 ? (
                <p>No expenses.</p>
            ) : (
                props.expenses.map(expense => {
                    return <ExpenseListItem key={expense.id} {...expense} />;
                })
            )}
        </div>
    );
};

// 2. Create the function that connects the store state with the props
// This gets called every time the store changes
const mapStateToProps = state => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

// 3. Export the function which returns the connected component
export default connect(mapStateToProps)(ExpenseList);
