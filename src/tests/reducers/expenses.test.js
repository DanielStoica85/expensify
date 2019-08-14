import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default expense values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '1234',
            description: 'description',
            note: 'note',
            amount: 1000,
            createdAt: 20000
        }
    };
    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', action });
    expect(state).toEqual([...expenses, action.expenses]);
});

test('should edit expense with valid id', () => {
    const updates = {
        note: 'Edited note'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].note).toBe(updates.note);
});

test('should edit expense with id not found', () => {
    const updates = {
        note: 'Edited note'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1234',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should remove expense by id', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    });
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: '827364837264'
    });
    expect(state).toEqual(expenses);
});
