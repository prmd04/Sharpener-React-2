
import "./Expense_Item.css"


function ExpenseItem (props) {
  console.log(props);

  // const expenseDate = new Date(2021,2,28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        {props.date.toString()}</div>
      <div className="expense-item__price">
        <h2>{props.title}</h2>
        <div>${props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;