export default expenses => {
    return expenses.reduce((acc, expense) => acc + expense.amount, 0);
};

// return expenses.map((expense => expense.amount)).reduce((sum, value) => sum + value, 0)
