import { useState } from 'react';
import React  from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) =>{
  const [enterTitle,setEnterTittle]= useState('');
  const [enterAmount,setEnterAmount]=useState('');
  const [enterDate,setEnterDate]=useState('');

  

  const TitleChangeHandler = (event) =>{
    setEnterTittle(event.target.value);
  }

  const amountChangeHandler = (event) =>{
    setEnterAmount(event.target.value);
  }

  const dateChangeHandler = (event) =>{
    setEnterDate(event.target.value);
  }

  const submitHandler = (event) =>{
    event.preventDefault();
    const expenseData ={
      title:enterTitle,
      amount:enterAmount,
      date:new Date(enterDate)
    };
    props.onSaveExpenseData(expenseData);
    setEnterTittle('');
    setEnterAmount('');
     setEnterDate('');
  }

  return ( <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={TitleChangeHandler} value={enterTitle}/>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enterAmount} />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} value={enterDate} />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="button" onClick={props.onCancle}>Cancle</button>
      <button type="submit" >Add Expense</button>
    </div>
  </form>

  )
}

export default ExpenseForm;