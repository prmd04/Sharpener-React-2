import React, { useState } from "react";

import ExpenseItem from "./Expense_Item";
import Card from "../UI/Card_Element";
import "./Expense.css";
import ExpensesFilter from "./Filter";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseItem items={filteredExpenses} />
    </Card>
  </div>
);
};

export default Expenses;
