import "./Expenses.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import { useState } from "react"
import ExpenseItem from "./ExpenseItem"

const Expenses = (props) => {
  const [year, setYear] = useState("2020")

  const filterChangeHandler = (yearFilter) => {
    setYear(yearFilter)
  }

  const filteredItems = props.expenses.filter(
    (expenseFiltered) => expenseFiltered.date.getFullYear().toString() === year
  )

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={year} onFilterChange={filterChangeHandler} />
        {filteredItems.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />
          )
        })}
      </Card>
    </div>
  )
}

export default Expenses
