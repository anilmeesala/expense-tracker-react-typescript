import * as ActionConstants from '../actions/action_constants'

export const expenseReducer = (expenseList=[],action) => {

    switch (action.type) {
        case ActionConstants.ALL_EXPENSES:
            return [...action.data];
        case ActionConstants.EXPENSE_SAVED:
            return [...expenseList, action.expense];
        case ActionConstants.EXPENSE_DELETED:
            return expenseList.filter(expense => expense.expenseId !== action.id);
        case ActionConstants.EXPENSE_UPDATED:
            return expenseList.map(expense=> expense.expenseId === action.expense.expenseId ? action.expense : expense);
        default:
            return expenseList;
    }


};

