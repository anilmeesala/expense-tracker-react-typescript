import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as ExpenseActions from "../actions/expense-actions";
import Toast from 'react-bootstrap/Toast'

interface AddExpenseProps {
    expenseSaved(expense:any):void
}

interface AddExpenseState {
    expenseForm: {
        expenseName: string,
        expenseDescription: string,
        expenseAmount: string,
        expenseDate: Date,
        expenseCategory: string,
        expenseDateStr: string,
        showToast:boolean

    }
}



class AddExpense extends Component<AddExpenseProps,AddExpenseState> {
    constructor(props:any){
        super(props);
        this.state = {
            expenseForm: {
                expenseName: '',
                expenseDescription: '',
                expenseAmount: '',
                expenseDate: new Date(),
                expenseDateStr: '',
                expenseCategory: 'Vegetables',
                showToast:false
            }
        };
        this.handleChange =  this.handleChange.bind(this);
        this.submitForm =  this.submitForm.bind(this);
    }

    handleChange(evt:any){
        evt.persist();
        this.setState(prevState=>
                ({expenseForm: {...prevState.expenseForm, [evt.target.name]: evt.target.value}})
        );
    }
    handleDateChange = async (date:any) =>{
        let fromDate = dayjs(date);
        let format = "MM/DD/YYYY";
        const fromDateStr = fromDate.format(format);
        this.setState(state=>({expenseForm:{...state.expenseForm,expenseDateStr:fromDateStr}}));
    };

    showToast= (showToast:any)=>{
        this.setState(state=>({expenseForm:{...state.expenseForm,showToast:showToast}}));
    };
    resetForm = ()=>{
        let reset ={
                expenseName: '',
                expenseDescription: '',
                expenseAmount: '',
                expenseDate: new Date(),
                expenseDateStr: '',
                expenseCategory: 'Vegetables',
        };
        this.setState(state=>({expenseForm:{...state.expenseForm,...reset}}));
    };

    async submitForm(evt:any){
        evt.preventDefault();
        await this.handleDateChange(this.state.expenseForm.expenseDate);
        await this.props.expenseSaved(this.state.expenseForm);
        this.showToast(true);
        this.resetForm()
    }


    render() {
        return (
            <div>
                <div className="container">
                    Create Expense
                </div>
                <div>
                    <Toast onClose={() => this.showToast(false)} show={this.state.expenseForm.showToast} delay={3000} autohide>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded mr-2"
                                alt=""
                            />
                            <strong className="mr-auto">Saved Expense</strong>
                        </Toast.Header>
                        <Toast.Body>Expense Saved</Toast.Body>
                    </Toast>
                </div>
                <div className="container">
                    <Form onSubmit={this.submitForm}>
                        <Form.Row>
                            <Form.Group controlId="expenseName">
                                <Form.Label>Expense Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Expense Name"
                                              name="expenseName"
                                              value={this.state.expenseForm.expenseName}
                                              onChange={this.handleChange}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="expenseDesc">
                                <Form.Label>Expense Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Expense Desc"
                                              name="expenseDescription"
                                              value={this.state.expenseForm.expenseDescription}
                                              onChange={this.handleChange}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="expenseAmount">
                                <Form.Label>Expense Amount</Form.Label>
                                <Form.Control type="text" placeholder="Enter Expense Amount"
                                              name="expenseAmount"
                                              value={this.state.expenseForm.expenseAmount}
                                              onChange={this.handleChange}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="expenseDate">
                                <Form.Label>Expense Date</Form.Label>
                                {/*<Form.Control type="text" placeholder="Enter Expense Date"/>*/}
                                <br/>
                                <DatePicker
                                    name="expenseDate" selected={this.state.expenseForm.expenseDate}
                                    dateFormat="dd-MM-yyyy"
                                    onChange={this.handleDateChange}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="expenseCategory">
                                <Form.Label>Expense Category</Form.Label>
                                <Form.Control as="select" name ="expenseCategory"
                                              value={this.state.expenseForm.expenseCategory} onChange={this.handleChange}>
                                    <option>Vegetables</option>
                                    <option>Grocery</option>
                                    <option>Shopping</option>
                                    <option>Food</option>
                                    <option>Transport</option>
                                    <option>Medical</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form.Row>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch:any) => bindActionCreators({...ExpenseActions},dispatch);

export default connect(null,mapDispatchToProps)(AddExpense);