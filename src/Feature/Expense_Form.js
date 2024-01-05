const Expense_form = () =>{
  <form>
    <label>
      Expense Title:
      <input type="text" name="title"></input>
    </label>

    <label>
      Expense Amount:
      <input type="number" name="amount"></input>
    </label>

    <label>
      Expense Date:
      <input type="date" name="date"></input>
    </label>

    <button type="submit" value="Submit"></button>
  </form>

  console.log()
}