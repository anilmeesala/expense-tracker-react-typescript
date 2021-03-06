import React, {Component} from 'react';
import {connect} from "react-redux";
import * as ExpenseActions from '../actions/expense-actions'
import {bindActionCreators} from "redux";
import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import './expense-list.css';

interface ExpenseDetailsProps {
    expenseList?:any
    getAllExpenses:()=>void
}

class ExpenseDetails extends Component<ExpenseDetailsProps,{}> {
    // constructor(props:ExpenseDetailsProps){
    //     super(props)
    // }
    componentDidMount(){
        this.props.getAllExpenses();
    };



    render() {

        return (
            <div>
                {
                    this.props.expenseList.map((e:any)=> (
                        <div className="expense-card">
                            <span className="item-del">Delete</span>
                            <span className="expense-item">Id: {e.id}</span>
                            <span className="expense-item">Expense Name:{e.expenseName}</span>
                            <span className="expense-item">Description: {e.expenseDescription}</span>
                            <span className="expense-item">Expense Category:{e.expenseCategory}</span>
                            <span className="expense-item">Amount: {e.expenseAmount}</span>
                            <span className="expense-item">Date: {e.expenseDate}</span>
                        </div>
                    )
                )}
            </div>

               );
            {/*<div>*/}
                {/*<div>*/}
                    {/*<Table  striped bordered hover size={"sm"} variant={"dark"}>*/}
                        {/*<thead>*/}
                        {/*<tr>*/}
                            {/*<th>Id</th>*/}
                            {/*<th>Expense Name</th>*/}
                            {/*<th>Description</th>*/}
                            {/*<th>Expense Category</th>*/}
                            {/*<th>Amount</th>*/}
                            {/*<th>Date</th>*/}
                        {/*</tr>*/}
                        {/*</thead>*/}
                        {/*<tbody>*/}
                        {/*{this.props.expenseList.map((e:any)=>{*/}
                           {/*return (*/}

                                {/*<tr key={e.id}>*/}
                                    {/*<td>{e.id}</td>*/}
                                    {/*<td>{e.expenseName}</td>*/}
                                    {/*<td>{e.expenseDescription}</td>*/}
                                    {/*<td>{e.expenseCategory}</td>*/}
                                    {/*<td>{e.expenseAmount}</td>*/}
                                    {/*<td>{e.expenseDate}</td>*/}
                                {/*</tr>*/}
                            {/*)*/}
                        {/*})}*/}
                        {/*</tbody>*/}
                    {/*</Table>*/}
                {/*</div>*/}
            {/*</div>*/}
        // );
    }
}

const mapStateToProps:any = (state:any) => {
    return {
        expenseList:state.expenseList
    }
};
const mapDispatchToProps = (dispatch:any) => bindActionCreators({...ExpenseActions},dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseDetails);