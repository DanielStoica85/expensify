import React from 'react';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expensesWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format(
        '$0,00.00'
    );
    return (
        <div>
            <h1>
                Viewing {expensesCount} {expensesWord}
                totalling {formattedExpensesTotal}.
            </h1>
        </div>
    );
};

const mapStateToProps = state => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
