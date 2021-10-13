import "./Expenses.css"
import ExpanseItem from "./ExpenseItem"
import Card from "./Card"

const Expenses = ({ expenses }) => {
  return (
    <Card className='expenses'>
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
  )
}

export default Expenses
