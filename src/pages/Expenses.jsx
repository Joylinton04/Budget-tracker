import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddExpense from "../components/AddExpense";
import useLocalStorage from "../hook/useLocalStorage";

const Expenses = () => {
  const {id} = useParams()
  const { budget, expenses, setExpenses } = useContext(DataContext);
  const [activeExpenseId, setActiveExpenseId] = useState(null);
  const [addExpense, setAddExpense] = useState(false);
  const { setItem } = useLocalStorage('expenses')

  const filteredBudget = budget.find((budget) => (budget.id) == id)
  const filteredExpenses = expenses.filter(expense => (expense.budgetId) == id);

  const toggleVisibility = (expenseId) => {
    setActiveExpenseId(prevActiveId => (prevActiveId === expenseId ? null : expenseId))
  };

  const handleDeleteExpense = (id) => {
    setExpenses((expenses) => {
      return expenses.filter((expense) => expense.id !== id)
    })
    setItem(expenses.filter((expense) => expense.id !== id))
  }

  const toggleAddExpense = () => {
    setAddExpense(addExpense => !addExpense)
  };

  const totalExpense = filteredExpenses.reduce((total, currentValue) => total + parseFloat(currentValue.amount), 0)

  const bgStyles = {
    'Food/Drinks': { backgroundColor: 'rgb(220 38 38)'},
    'vacation': { backgroundColor: 'rgb(37 99 235)' },
    'Transport': { backgroundColor: ' rgb(234 179 8)'},
    'Hobbies': { backgroundColor: 'green' },
    'other': { backgroundColor: 'purple' },
  };
  

  return (
    <div className="h-full relative overflow-y-auto">
      <div className="sticky top-0 z-10">
          <div className="text-center p-2">
             {filteredBudget &&
                <>
                <h1 className="text-3xl font-semibold">{filteredBudget.category}</h1>
                <p className="py-2 text-lg">{filteredBudget.date}</p>
                </>
            }
          </div>
          <div>
          <div className="flex justify-between text-2xl border-b-2 pb-2">
              <h1 className="capitalize">transaction: {filteredExpenses ? (filteredExpenses.length) : 0}</h1>
              <p className="text-green-500 font-semibold">Budget: {filteredBudget ? `${filteredBudget.amount}`: '0$'}$</p>
              <p className="text-red-500 font-semibold">Expenses: {totalExpense ? `-${totalExpense}.00$` : '0$'}</p>
          </div>
      </div>
         <ul className="px-4 py-2">
            {filteredExpenses.length ? 
              filteredExpenses.map((expense) => (
                <li className="hover:bg-zinc-200 rounded p-2 flex justify-between items-center border-2 border-b-slate-300 mb-6 relative" key={expense.id}>
                    <div className="flex gap-4">
                      <div className="w-16 h-16 rounded-full grid place-content-center text-2xl text-white" style={bgStyles[expense.category]}>{expense.category[0]}</div>
                      <div>
                        <p className="capitalize">{expense.category}</p>
                        <p>{expense.account}</p>
                      </div>
                    </div>
                    <div className="flex gap-8">
                      <div>
                        <p>{expense.amount}$</p>
                        <p>{expense.date}</p>
                      </div>
                      <div>
                          <p className="deleteOption" onClick={() => toggleVisibility(expense.id)}><MoreHorizIcon fontSize="large"/></p>
                         {activeExpenseId === expense.id &&
                          <div onClick={() => handleDeleteExpense(expense.id)} className="active absolute -right-2 z-10 mt-2 w-36 h-12 bg-white grid place-content-center text-red-500 rounded px-2 py-2 cursor-pointer hover:bg-red-500 hover:text-white">
                             <p>Delete Expense</p>
                          </div>
                         }
                      </div>
                    </div>
                </li>
                ))
            : <p className="text-3xl text-black text-center p-4"></p>
            }
         </ul>
          <button onClick={toggleAddExpense} className="fixed right-[500px] bottom-20 mt-16 z-50 bg-red-500 text-white text-3xl rounded-full w-14 h-14 grid place-items-center">-</button>
      </div>
      {addExpense && 
            <AddExpense toggleAddExpense={toggleAddExpense}/>
      }
    </div>
  )
}

export default Expenses;