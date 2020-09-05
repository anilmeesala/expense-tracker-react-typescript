import {createStore,combineReducers} from 'redux'
import {expenseReducer} from "../reducers/expense-reducer";
import * as actionsCreators from "../actions/expense-actions";


const root_reducer = combineReducers({expenseList:expenseReducer});
const store = createStore(root_reducer);
store.subscribe(()=>{console.log(store.getState())});
console.log(store.getState());
store.dispatch(actionsCreators.expenseCreated({expenseId:4,expenseName:'test4'}));
