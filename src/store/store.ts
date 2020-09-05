import {combineReducers, createStore, applyMiddleware} from 'redux';
import {expenseReducer} from '../reducers/expense-reducer'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk'
import loaderRequestCount from "../reducers/loader-reducer";


// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }

const middleware = [
    thunk,
];
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const root_reducer = combineReducers(
    {
        expenseList:expenseReducer,
        loaderRequestCount:loaderRequestCount
        }
    );
const getStore = () => createStore(root_reducer,
    composeWithDevTools(applyMiddleware(...middleware)));
export default getStore;


