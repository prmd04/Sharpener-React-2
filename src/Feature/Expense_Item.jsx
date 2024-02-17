import React from "react";
import "./Expense_Item.css";
import ExpenseDate from "./Expense_Date";
import Card from "../UI/Card_Element";

const ExpenseItem = (props) => {
 
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div 
        className="expense-item__price">${props.amount}
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
