import React ,{useState} from "react";
import "./Expense_Item.css";
import ExpenseDate from "./Expense_Date";
import Card from "../UI/Card_Element";

const ExpenseItem = (props) => {
  const [title,setTitle] = useState(props.title);
  
  const clikedHandler = () => {
   setTitle("update");
   console.log(title);
  };


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div 
        className="expense-item__price">${props.amount}
        </div>
        <button onClick={clikedHandler}>change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
