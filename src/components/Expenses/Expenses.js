import "./Expenses.css"
import Card from "../UI/Card"
import ExpanseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
import { useState } from "react"

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState("2020")

  const filterChangeHandler = (yearFilter) => {
    console.log("from Expenses.js")
    setYear(yearFilter)
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={year} onFilterChange={filterChangeHandler} />
        <ExpanseItem
          date={expenses[0].date}
          title={expenses[0].title}
          amount={expenses[0].amount}
        />
        <ExpanseItem
          date={expenses[1].date}
          title={expenses[1].title}
          amount={expenses[1].amount}
        />
        <ExpanseItem
          date={expenses[2].date}
          title={expenses[2].title}
          amount={expenses[2].amount}
        />
        <ExpanseItem
          date={expenses[3].date}
          title={expenses[3].title}
          amount={expenses[3].amount}
        />
      </Card>
    </div>
  )
}

export default Expenses
