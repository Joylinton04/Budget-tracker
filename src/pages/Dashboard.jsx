import BudgetReference from "../components/BudgetReference";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

const Dashboard = () => {
  const { budget } = useContext(DataContext)
  const [recent, setRecent] = useState([])

  useEffect(() => {
    if(budget.length>0) {
      setRecent(budget.slice(-10).reverse())
    }
  },[budget])

  return (
   <div>
      <BudgetReference/>
      <div className="border-2 rounded-2xl bg-white mt-8">
          <div className="rounded-2xl p-6 flex justify-between">
            <h1 className="capitalize">budget records</h1>
            <span><Link to="/">view all</Link></span>
          </div>
          <div className="px-6 pb-6">
            <table className="w-full">
              <tbody>
                {recent 
                ?  recent.map((recent => (
                  <tr className="border-b-2 relative" key={recent.id}>
                    <td className="font-bold capitalize text-left">{recent.category}</td>
                    <td className="text-left">{recent.date}</td>
                    <td className="text-left">{recent.account}</td>
                    <td className="font-bold text-red-600 text-left absolute right-0">{recent.amount}</td>
                  </tr>
                )))
                : <p>No transaction</p>
              }
            </tbody>
            </table>
          </div>
      </div>
   </div>
  )
}

export default Dashboard;