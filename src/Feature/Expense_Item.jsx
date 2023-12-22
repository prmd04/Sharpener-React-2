
import "./Expense_Item.css"
import ExpenseDate from "./Expense_Date";

const ExpenseItem =(props) => {
  
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
      <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">
        <div>${props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;