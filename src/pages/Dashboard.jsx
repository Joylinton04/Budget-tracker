import BudgetReference from "../components/BudgetReference";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

const Dashboard = () => {
  const { budget, expenses } = useContext(DataContext)
  const [recent, setRecent] = useState([])

  useEffect(() => {
    if(budget) {
      setRecent(budget.slice(-10).reverse())
    }
  },[budget])

  return (
   <div className="h-full">
      <BudgetReference/>
      <div className="border-2 rounded-2xl bg-white mt-8 pb-16">
          <div className="rounded-2xl p-6 flex justify-between">
            <h1 className="capitalize font-semibold text-2xl">Recent records</h1>
            <span className="text-blue-600 text-lg hover:underline"><Link to="/analytics">view all</Link></span>
          </div>
          <div className="px-6 pb-6">
            <table className="w-full">
              <tbody>
                {recent.length > 0
                ?  recent.map((recent => {
                  const Allexpense = expenses.filter(expense => expense.id == recent.id)
                  const totalExpense = Allexpense.reduce((total, currentExpense)=> total + parseFloat(currentExpense.amount), 0)
                  const total = eval(recent.amount - totalExpense)
                  return(
                  <tr className="border-b-2 relative hover:bg-slate-100 cursor-pointer" key={recent.id}>
                    <td className="font-bold capitalize text-left text-lg">{recent.category}</td>
                    <td className="text-left">{recent.date}</td>
                    <td className="text-left">{recent.account}</td>
                    <td className="font-bold text-left absolute right-0" style={total <= 0 ? {color: 'red'} : {color:'green'}}>{total}$</td>
                  </tr>
                  )
                }))
                : <tr className="text-3xl text-black text-center p-4"><td>No Recent Budget</td></tr>
              }
            </tbody>
            </table>
          </div>
      </div>
   </div>
  )
}

export default Dashboard;