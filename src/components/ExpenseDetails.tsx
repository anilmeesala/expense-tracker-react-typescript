import React, {Component} from 'react';
import {connect} from "react-redux";
import * as ExpenseActions from '../actions/expense-actions'
import {bindActionCreators} from "redux";
// import {Container} from 'react-bootstrap'
import {Table} from 'react-bootstrap';
import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';

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
        const colDefs = [
            {headerName:"Select",checkboxSelection: true},
            {headerName:"Id",field:"id",sortable: true, filter: true},
            {headerName:"Expense Name",field:"expenseName",sortable: true, filter: true},
            {headerName:"Description",field:"expenseDescription",sortable: true, filter: true},
            {headerName:"Expense Category",field:"expenseCategory",sortable: true, filter: true},
            {headerName:"Amount",field:"expenseAmount",sortable: true, filter: true},
            {headerName:"Date",field:"expenseDate",sortable: true, filter: true}
        ];
        return (
            <div
                className="ag-theme-alpine"
                style={{
                    height: '250px',
                    width: '100%' }}
            >
                <AgGridReact
                    columnDefs={colDefs}
                    rowData={this.props.expenseList}/>
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