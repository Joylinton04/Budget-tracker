import { useContext } from "react";
import { DataContext } from "../context/DataContext"

const BudgetReference = () => {
    const { totalBudget } = useContext(DataContext)

    console.log(totalBudget)
  return (
    <div className="flex gap-8">
        <div className="rounded-3xl border-2 border-orange-400 px-4 py-2 h-28 w-48 bg-orange-200 flex flex-col justify-between pl-6">
            <p className="font-bold text-2xl mt-2">{totalBudget ? totalBudget + '.00$' : 0}</p>
            <p>Total budget</p>
        </div>
        <div className="rounded-3xl border-2 border-orange-400 px-4 py-2 h-28 w-48 bg-orange-200 flex flex-col justify-between pl-6">
            <p className="font-bold text-2xl mt-2">1,000.00$</p>
            <p>budget</p>
        </div>
        <div className="rounded-3xl border-2 border-orange-400 px-4 py-2 h-28 w-48 bg-orange-200 flex flex-col justify-between pl-6">
            <p className="font-bold text-2xl mt-2">1,000.00$</p>
            <p>budget</p>
        </div>
    </div>
  )
}

export default BudgetReference;