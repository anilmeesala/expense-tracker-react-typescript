let expenses = [
    {
        expenseId: 1,
        expenseName:'test'
    },
    {
        expenseId: 2,
        expenseName:'test2'
    },

    {
        expenseId: 3,
        expenseName:'test3'
    }

];

filteredExpenses = expenses.filter(e=>e.expenseId !==1);
// console.log(filteredExpenses);

insertExpenseList = [...expenses,{expenseId:4,expenseName:'test4'}];
// console.log(insertExpenseList);

// ways to update object in an array
// method1
// updateObjIndex = expenses.findIndex(e=>e.expenseId ==2);
// expenses[updateObjIndex].expenseName="test2Update";

// method 2:
//without mutating the array
// expenses.splice(1,1,{expenseId:2,expenseName:'test2Updated'});


//method3
// objIndex = expenses.findIndex(e=>e.expenseId == 2);
// updatedExpense = {...expenses[objIndex],expenseName:'test2Updated'};
// updatedExpenses = [...expenses.slice(0,objIndex),updatedExpense,...expenses.slice(objIndex+1)];
// console.log(updatedExpenses);

//method4
// updatedExpenses = expenses.map(e=>e.expenseId==2 ? {...e,expenseName:"test2Updated"}:e);
// console.log(updatedExpenses);

//method5 (only returns updated object)
// updatedObject = expenses.find(e=>e.expenseId==2 && (e.expenseName="test2Updated"));
// console.log(expenses);


