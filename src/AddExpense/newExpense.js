import React from "react";
import './newExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{
  const saveExpenseDataHandler = (enterExpenseData) =>{
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }
  return ( <div className="new-expense">
    <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
  </div>

  )
}

export default NewExpense;