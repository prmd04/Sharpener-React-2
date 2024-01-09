import React, { useState } from "react";

import ExpenseItem from "./Expense_Item";
import Card from "../UI/Card_Element";
import "./Expense.css";
import ExpensesFilter from "./Filter";

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
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.length === 0 && <p>no item found</p>}

        {filteredExpenses.length > 0 &&
          filteredExpenses.map((item, index) =>
            filteredExpenses.length === 1 ? (
              <div>
                <ExpenseItem
                  key={index}
                  title={item.title}
                  amount={item.amount}
                  date={item.date}
                />
                <h2>Only Single Expense Here.. Add more</h2>{" "}
              </div>
            ) : (
              <ExpenseItem
                key={index}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            )
          )}
      </Card>
    </div>
  );
};

export default Expenses;
