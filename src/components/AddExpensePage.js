import React from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends React.Component {
    addExpense = expense => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit={this.addExpense} />
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        startAddExpense: expense => dispatch(startAddExpense(expense))
    };
};

export default connect(
    undefined,
    mapDispatchToProps
)(AddExpensePage);
