import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const AddBudget = () => {
    const { budget, setBudget } = useContext(DataContext)
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [account, setAccount] = useState('')
    const navigate = useNavigate()

    


    const handleSubmit = (e)=> {
        e.preventDefault()
        const id = budget.length ? budget[budget.length-1].id + 1 : 1
        setBudget((prevBudget) => 
        {return [...prevBudget, {id:id,category:category,amount:amount,account:account,date:'31 Oct'}]})
        navigate('/')
    }


  return (
    <form className="rounded-2xl p-4 relative h-full" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-medium">Add your budget here</h1>
       <div className="flex flex-col gap-8 mt-8 h-3/5 bg-white p-6 rounded-2xl">
            <div className="flex flex-col">
                    <label htmlFor="budget">Budget Amount</label>
                    <input 
                        type="number" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="bg-[#efeeee] px-4 py-2 rounded-lg w-1/2"
                        required/>
            </div>
            <div className="flex flex-col">
                    <label htmlFor="category">Category</label>
                    <select 
                        htmlFor="category" 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="bg-[#efeeee] px-4 py-2 rounded-lg appearance-none w-3/5"
                        selected
                        required>
                        <option value="" disabled hidden>eg. eating out</option>
                        <option>eating out</option>
                        <option>vacation</option>
                        <option>Rent apartment</option>
                        <option>Transport</option>
                        <option>Hobbies</option>
                        <option>Others</option>
                    </select>
            </div>
            <div className="flex flex-col">
                    <label htmlFor="account">Account</label>
                    <select 
                        htmlFor="account" 
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
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
       <button className="absolute right-0 mt-16 bg-green-500 text-white text-3xl rounded-full w-14 h-14 grid place-items-center">+</button>
    </form>
  )
}

export default AddBudget;