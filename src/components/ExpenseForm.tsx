import React, {Component} from 'react';

interface IExpenseFormModel {
    modal: boolean;
}

class ExpenseForm extends Component<{}, IExpenseFormModel> {
    constructor(props: any) {
        super(props);
        this.state = {
            modal: false
        }
    }

    toggle = () => {
        this.setState({modal: !this.state.modal})
    };

    submitExpense(event:any){
        event.preventDefault();
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default ExpenseForm;