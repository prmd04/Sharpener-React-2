import "./Expense_Date.css"
import React from "react";


const ExpenseDate = (props) => {
  console.log(props);
  
  const date = new Date(props.date); // Convert the date string to a Date object

  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  console.log(month);
  console.log(day);
  console.log(year);

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
