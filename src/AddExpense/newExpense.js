import React from "react";
import './newExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{
  console.log(props);
  const saveExpenseDataHandler = (enterExpenseData) =>{
    const expenseData = {
      id: Math.random().toString(), ...enterExpenseData
      
    }
    props.onAddExpense(expenseData);
  }
  return ( <div className="new-expense">
    <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
  </div>

  )
}

export default NewExpense;