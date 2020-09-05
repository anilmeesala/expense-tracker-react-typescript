import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from 'react-redux'
import getStore from './store/store'
import AddExpense from "./components/AddExpense";
import Loader from 'react-loader-spinner';
import Header from "./components/Header";


const store = getStore();
const routing = (
    <div>
        <Header/>
    <Provider store={store}>
        <Router>

            <div>
                <Route path="/" component={App} exact={true} />
                <Route path="/home" component={App} exact ={true} />
                <Route path="/addExpense" component={AddExpense} exact={true} />
                {/*<Route path="/createExpense" component={ExpenseForm} />*/}
            </div>
        </Router>
    </Provider>
    </div>
)

ReactDOM.render(
    routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
