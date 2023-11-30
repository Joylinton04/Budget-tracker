import { useEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import format from "date-fns/format";
import { useParams } from "react-router-dom";

const EditBudget = () => {
    const {id} = useParams()
    const { budget, setBudget } = useContext(DataContext)
    const [editAmount, setEditAmount] = useState('')
    const [editCategory, setEditCategory] = useState('')
    const [editAccount, setEditAccount] = useState('')
    const navigate = useNavigate()

    const filteredBudget = budget.find((budget) => (budget.id).toString() === id)

    useEffect(() => {
        if(filteredBudget) {
            setEditAmount(filteredBudget.amount)
            setEditCategory(filteredBudget.category)
            setEditAccount(filteredBudget.account)
        }
    },[filteredBudget])

    


    const handleEdit = (id)=> {
        setBudget((prevBudget) => {
            return prevBudget.map((budget) => budget.id === id ? {id:id,category:editCategory,amount:editAmount,account:editAccount,date:format(new Date(), 'MM/yy/dd')} : budget)
        })
        navigate('/analytics')
    }


  return (
    <form className="rounded-2xl p-4 relative h-full" onSubmit={(e) => e.preventDefault()}>
        <h1 className="text-2xl font-medium">Edit your budget here</h1>
       <div className="flex flex-col gap-8 mt-8 h-3/5 bg-white p-6 rounded-2xl">
            <div className="flex flex-col">
                    <label htmlFor="budget">Budget Amount</label>
                    <input 
                        type="number" 
                        value={editAmount}
                        onChange={(e) => setEditAmount(e.target.value)}
                        className="bg-[#efeeee] px-4 py-2 rounded-lg w-1/2"
                        required/>
            </div>
            <div className="flex flex-col">
                    <label htmlFor="category">Category</label>
                    <select 
                        htmlFor="category" 
                        value={editCategory}
                        onChange={(e) => setEditCategory(e.target.value)}
                        className="bg-[#efeeee] px-4 py-2 rounded-lg appearance-none w-3/5"
                        selected
                        required>
                        <option value="" disabled hidden>eg. eating out</option>
                        <option>eating out</option>
                        <option>vacation</option>
                        <option>Food/Drinks</option>
                        <option>Transport</option>
                        <option>Hobbies</option>
                        <option>Others</option>
                    </select>
            </div>
            <div className="flex flex-col">
                    <label htmlFor="account">Account</label>
                    <select 
                        htmlFor="account" 
                        value={editAccount}
                        onChange={(e) => setEditAccount(e.target.value)}
                        className="bg-[#efeeee] px-4 py-2 rounded-lg appearance-none w-3/5"
                        selected
                        required>
                        <option value="" disabled hidden>eg. credit</option>
                        <option>Paypal</option>
                        <option>Credit card</option>
                        <option>wallet</option>
                    </select>
            </div>
       </div>
       <button onClick={() => handleEdit(filteredBudget.id)} className="absolute right-0 mt-16 bg-green-500 text-white text-3xl rounded-full w-14 h-14 grid place-items-center">+</button>
    </form>
  )
}

export default EditBudget;