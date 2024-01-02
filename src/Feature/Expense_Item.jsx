import React ,{useState} from "react";
import "./Expense_Item.css";
import ExpenseDate from "./Expense_Date";
import Card from "../UI/Card_Element";

const ExpenseItem = (props) => {
  const [title,setTitle] = useState(props.title);
  const [expense,setExpense] = useState(props.amount);
  
  const clikedHandler = () => {
   setTitle("update");
   console.log(title);
  };

  const clikedHandler_expense = () => {
    setExpense("$100");
    console.log(expense);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div 
        className="expense-item__price">{expense}
        <button onClick={clikedHandler_expense}>update expense</button>
        </div>
        <button onClick={clikedHandler}>change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
