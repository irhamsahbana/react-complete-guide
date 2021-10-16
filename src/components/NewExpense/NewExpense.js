import { useState } from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {
  const [formDisplay, setFormDisplay] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    props.onAddExpense(expenseData)
  }

  const formDisplayHandler = () => {
    setFormDisplay((prevState) => {
      return !prevState
    })
  }

  return (
    <div className='new-expense'>
      {!formDisplay && (
        <button onClick={formDisplayHandler}>Add New Expense</button>
      )}
      {formDisplay && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          formDisplayHandler={formDisplayHandler}
        />
      )}
    </div>
  )
}

export default NewExpense
