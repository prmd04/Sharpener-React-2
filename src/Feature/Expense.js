import React from "react";

import ExpenseItem from "./Expense_Item";
import Card from "../UI/Card_Element";
import "./Expense.css";

const Expenses = (props) => {
  console.log(props);
  return (
    <div>
      {props.items.map((item, index) => (
        <Card className="expenses" key={index}>
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        </Card>
      ))}
    </div>
  );
};

export default Expenses;
