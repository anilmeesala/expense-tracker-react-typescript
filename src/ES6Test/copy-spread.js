let state = {
    expenseForm:{
        expenseName:'test',
        expenseDes:'desc'
    }
};

// let eForm = state.expenseForm;
copied = {...state.expenseForm,test:'test'};
console.dir({expenseForm: copied});