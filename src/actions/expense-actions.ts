import * as ActionConstants from './action_constants'
import * as ExpenseApi from '../api/ExpenseApi'
import {LOADER_END, LOADER_START} from "./loader-constants";


export const getAllExpenses = () => (dispatch:any) =>{
    dispatch({type:LOADER_START});
    ExpenseApi.getAllExpenses().then(res => res.data)
        .then(data=>{
           dispatch({type:ActionConstants.ALL_EXPENSES, data});
           dispatch({type:LOADER_END});
        });

};

export const expenseSaved = (expense:any) =>(dispatch:any)=>{
    dispatch({type:LOADER_START});
    ExpenseApi.saveExpense(expense).then(res=>res.data)
        .then(data=>{
           dispatch ({type:ActionConstants.EXPENSE_SAVED},expense);
           dispatch({type:LOADER_END});
        });
};

export const expenseRemoved = (expenseId:any) =>{
    return {
        type:ActionConstants.EXPENSE_DELETED,
        expenseId
    }
};

export const expenseUpdated = (expense:any) =>{
    return {
        type:ActionConstants.EXPENSE_UPDATED,
        expense
    }
};