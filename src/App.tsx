import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import ExpenseDetails from "./components/ExpenseDetails";
import Loader from "react-loader-spinner";
import {connect} from "react-redux";
import AddExpense from "./components/AddExpense";

interface AppState {
    expensePopUp:boolean;
}

interface AppProps {
    requestCount:number;
}
class App extends Component<AppProps,AppState> {
    constructor(props:any){
        super(props);
        this.state= {
            expensePopUp: false,
        };
    }
    render() {
        return (
            <div>
                {/*<Loader type="Circles" color="#00BFFF"*/}
                        {/*height={80} width={80} visible={this.state.loader}/>*/}
                <ExpenseDetails/>
                <div
                    style={{
                        width: "100%",
                        height: "100",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                <Loader visible={this.props.requestCount!==0}/>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state:any) => {
    return {requestCount: state.loaderRequestCount}
};

export default connect(mapStateToProps)(App);
