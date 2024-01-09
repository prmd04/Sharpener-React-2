import React ,{useState} from "react";
import './newExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{
  const [isEdiiting,setIsEditing] = useState(false);

  const startEditing = () =>{
    setIsEditing(true);
  }
  const StopEditing = () =>{
    setIsEditing(false);
  }
  
  const saveExpenseDataHandler = (enterExpenseData) =>{
    const expenseData = {
      id: Math.random().toString(), ...enterExpenseData
      
    }
    props.onAddExpense(expenseData);
  }
  return ( <div className="new-expense">
    {!isEdiiting && <button onClick={startEditing} >Add new Expense</button>}
      {isEdiiting &&<ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancle={StopEditing}/>} 
  </div>

  )
}

export default NewExpense;