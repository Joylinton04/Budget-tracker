import CategoryIcon from '@mui/icons-material/Category';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useEffect, useState } from 'react';
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import format from 'date-fns/format';
import useLocalStorage from '../hook/useLocalStorage';



const AddExpense = ({toggleAddExpense}) => {
    const {id:budgetId} = useParams()
    const { expenses, setExpenses } = useContext(DataContext)
    const [expenseAmount, setExpenseAmount] = useState('')
    const [expenseCategory, setExpenseCategory] = useState('')
    const [expenseAccount, setExpenseAccount] = useState('')
    const { setItem } = useLocalStorage('expenses')

    const handleAddExpense = (e) => {
        e.preventDefault()
        const id = expenses.length ? expenses[(expenses.length)-1].id + 1 : 1
        setExpenses(prevExpenses => {
            return [...prevExpenses, {
                id:id, budgetId:budgetId, 
                amount:expenseAmount, 
                category:expenseCategory, 
                account:expenseAccount,
                date:format(new Date(),'MM/dd/yyyy')
        }]
        })
        setItem([...expenses, 
            {
                id:id, budgetId:budgetId, 
                amount:expenseAmount, 
                category:expenseCategory, 
                account:expenseAccount,
                date:format(new Date(),'MM/dd/yyyy')
            }])
        toggleAddExpense()
    }

    

  return (
    <div className="fixed top-1/4 left-1/2 -translate-x-2/4 bg-white w-1/2 h-1/2 rounded-lg p-4 z-20  scale-1 transition-transform">
        <h1 className='capitalize text-center font-bold text-2xl'>new expense</h1>
        <form className='p-2 relative h-full flex flex-col gap-6' onSubmit={handleAddExpense}>
            <div className='flex gap-6 items-center'>
                <CategoryIcon fontSize='large'/>
                <div className='flex flex-col w-full gap-2'>
                    <label htmlFor="category">Category</label>
                    <select
                        value={expenseCategory}
                        onChange={(e) => setExpenseCategory(e.target.value)}
                        id='category'
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
            </div>
            <div className='flex gap-6 items-center'>
            <CategoryIcon fontSize='large'/>
                <div className='flex flex-col w-1/2 gap-2'>
                    <label htmlFor='amount'>Amount</label>
                    <input 
                        type='number' 
                        id='amount'
                        value={expenseAmount}
                        onChange={(e) => setExpenseAmount(e.target.value)}
                        className="bg-[#efeeee] px-4 py-2 rounded-lg appearance-none"
                        required
                        />
                </div>
            </div>
            <div className='flex gap-6 items-center'>
                <AccountBalanceIcon fontSize='large'/>
                <div className='flex flex-col w-full gap-2'>
                    <label htmlFor="account">Account</label>
                        <select 
                            htmlFor="account" 
                            value={expenseAccount}
                            onChange={(e) => setExpenseAccount(e.target.value)}
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
            <button className="absolute right-0 bottom-8 mt-16 bg-red-500 text-white text-lg rounded-lg w-24 px-4 py-2 grid place-items-center">Save</button>
        </form>
    </div>
  )
}

export default AddExpense;