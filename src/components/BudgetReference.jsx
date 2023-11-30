import { useContext } from "react";
import { DataContext } from "../context/DataContext"

const BudgetReference = () => {
    const { totalBudget, totalExpense } = useContext(DataContext)

  return (
    <div className="flex gap-10 cursor-pointer">
        <div className="rounded-3xl border-2 border-orange-400 px-4 py-2 h-28 min-w-[192px] bg-orange-200 flex flex-col justify-between pl-6">
            <p className="font-bold text-3xl mt-2">{totalBudget ? totalBudget + '.00$' : 0}</p>
            <p>Total budget</p>
        </div>
        <div className="rounded-3xl border-2 border-orange-400 px-4 py-2 h-28 min-w-[192px] bg-orange-200 flex flex-col justify-between pl-6">
            <p className="font-bold text-3xl mt-2">{totalExpense ? totalExpense + '.00$' : 0}</p>
            <p>Total expenses</p>
        </div>
    </div>
  )
}

export default BudgetReference;