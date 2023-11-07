import { createContext } from 'react';
import { useState,useEffect } from 'react';

export const DataContext = createContext("");

export const DataProvider = ({children}) => {
    const [budget, setBudget] = useState([
        {
          id: 1,
          category:'vacation',
          amount: '5000.00',
          account: 'credit',
          date: '4/11/2023',
        },
        {
          id: 2,
          category:'Hobbies',
          amount: '3000.00',
          account: 'credit',
          date: '1/11/2023',
        },
        {
          id: 3,
          category:'Food/Drinks',
          amount: '2000.00',
          account: 'credit',
          date: '4/11/2023',
        },
        {
          id: 4,
          category:'Transport',
          amount: '2000.00',
          account: 'credit',
          date: '5/11/2023',
        },
        {
          id: 5,
          category:'Others',
          amount: '2000.00',
          account: 'credit',
          date: '3/11/2023',
        }
      ])
      const [expenses, setExpenses] = useState([
        {
          id: 1,
          budgetId:1,
          category:'vacation',
          amount: '2000.00',
          account: 'credit',
          date: '4/11/2023',
        },
        {
          id: 2,
          budgetId:2,
          category:'Hobbies',
          amount: '2000.00',
          account: 'credit',
          date: '1/11/2023',
        },
        {
          id: 3,
          budgetId:3,
          category:'Food/Drinks',
          amount: '2000.00',
          account: 'credit',
          date: '4/11/2023',
        },
        {
          id: 4,
          budgetId:4,
          category:'Transport',
          amount: '2000.00',
          account: 'credit',
          date: '5/11/2023',
        }
      ])
      const [totalBudget, setTotalBudget] = useState(0);
      const [totalExpense, setTotalExpense] = useState(0);

      useEffect(() => {
          const updatedTotalBudget = budget.reduce((total, currentValue) => total + parseFloat(currentValue.amount), 0);
          setTotalBudget(updatedTotalBudget);
          const updateTotalExpense = expenses.reduce((total, currentValue) => total + parseFloat(currentValue.amount), 0);
          setTotalExpense(updateTotalExpense)
      }, [budget,expenses]);
      
  return (
    <DataContext.Provider value={{
        budget, setBudget, totalBudget,expenses,setExpenses,totalExpense
    }}>
        {children}
    </DataContext.Provider>
  )
}