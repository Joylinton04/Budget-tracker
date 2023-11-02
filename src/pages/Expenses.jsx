import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Expenses = () => {
  const {id} = useParams()
  const { budget, expenses, setExpenses } = useContext(DataContext);
  const [budgetExpense, setBudgetExpense] = useState([]);

  const bud = budget.find((budget) => (budget.id).toString() === id)
  const exp = expenses.find(expense => (expense.budgetId).toString() === id)

  

  useEffect(() => {
      if(bud && exp) {
        setBudgetExpense(exp)
      }
  },[expenses])


  return (
    <div className="h-full border-2">
      <div className="text-center p-2">
          <h1 className="text-3xl font-semibold">Rent Apartment</h1>
          <p className="py-2 text-lg">December 20</p>
      </div>
      <div>
         <div className="flex justify-between text-2xl border-b-2 pb-2">
            <h1 className="capitalize">transaction: 0</h1>
            <p>Total: -1300.00$</p>
         </div>
         <ul className="px-4 py-2">
            {budgetExpense ? 
            budgetExpense.map((expense) => (
              <li className="hover:bg-slate-200 rounded p-2" key={expense.id}>
                <Link className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-red-500 rounded-full"></div>
                    <div>
                      <p className="capitalize">{expense.category}</p>
                      <p>{expense.account}</p>
                    </div>
                  </div>
                  <div>
                    <p>{expense.amount}$</p>
                    <p>{expense.date}</p>
                  </div>
                </Link>
              </li>
              ))
            : <p>no transaction</p>
            }
         </ul>
      </div>
    </div>
  )
}

export default Expenses;