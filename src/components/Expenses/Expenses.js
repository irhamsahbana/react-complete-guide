import "./Expenses.css"
import { useState } from "react"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesChart from "./ExpensesChart"
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
    <li>
      <Card className='expenses'>
        <ExpensesFilter selected={year} onFilterChange={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList filteredExpenses={filteredExpenses}/>
      </Card>
    </li>
  )
}

export default Expenses
