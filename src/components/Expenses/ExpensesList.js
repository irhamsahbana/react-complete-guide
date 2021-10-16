import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem"

const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found.</p>

  if (props.filteredExpenses.length > 0) {
    expensesContent = props.filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      )
    })
  }

  return <ul className='expenses-list'>
    {expensesContent}
  </ul>
}

export default ExpensesList
