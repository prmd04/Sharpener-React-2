import React from "react";
import "./Expense_Item.css"
import ExpenseDate from "./Expense_Date";



const ExpenseItem =(props) => {
  console.log(props)
  console.log(props.items);
  
  return (
      <div>
        {props.items.map((item, index) => (
          <div key={index} className="expense-item">
            <ExpenseDate date={item.date} />
            <div className="expense-item__description">
              <h2>{item.title}</h2>
            </div>
            <div className="expense-item__price">
              <div>${item.amount}</div>
            </div>
          </div>
        ))}
      </div>
    );
    
}
    

export default ExpenseItem;

  

