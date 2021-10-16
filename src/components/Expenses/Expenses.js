import "./Expenses.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import { useState } from "react"
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
  const [year, setYear] = useState("2020")

  const filterChangeHandler = (yearFilter) => {
    setYear(yearFilter)
  }

  const filteredExpenses = props.expenses.filter(
    (expenseFiltered) => expenseFiltered.date.getFullYear().toString() === year
  )

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={year} onFilterChange={filterChangeHandler} />
        <ExpensesList filteredExpenses={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses
