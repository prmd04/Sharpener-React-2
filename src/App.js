import Expenses from "./Feature/Expense";
import React,{useState} from "react";
import NewExpense from "./AddExpense/newExpense";
import { initialExpenses } from "./constant";

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addNewExpenseHandler = (newExpense) => {
  setExpenses((prevExpenses) => {  //its take previous array automatically
    return [newExpense , ...prevExpenses];// then we here update the state
  })
};

  return (
    <div>
     <NewExpense onAddExpense={addNewExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
