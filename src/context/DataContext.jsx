import { createContext } from 'react';
import { useState,useEffect } from 'react';

export const DataContext = createContext("");

export const DataProvider = ({children}) => {
    const [budget, setBudget] = useState([
        {
          id: 1,
          category:'vacation',
          amount: '-1000.00',
          account: 'credit',
          date: '20 December',
        },
        {
          id: 2,
          category:'vacation',
          amount: '3000.00',
          account: 'credit',
          date: '20 December',
        },
        {
          id: 3,
          category:'vacation',
          amount: '2000.00',
          account: 'credit',
          date: '20 December',
        }
      ])
      const [expenses, setExpenses] = useState([
        {
          id: 1,
          budgetId:1,
          category:'vacation',
          amount: '2000.00',
          account: 'credit',
          date: '20 December',
        },
        {
          id: 2,
          budgetId:2,
          category:'Hobbies',
          amount: '2000.00',
          account: 'credit',
          date: '20 December',
        },
        {
          id: 3,
          budgetId:3,
          category:'Transport',
          amount: '2000.00',
          account: 'credit',
          date: '20 December',
        }
      ])
      const [totalBudget, setTotalBudget] = useState(0);

      useEffect(() => {
          const updatedTotalBudget = budget.reduce((total, currentValue) => total + parseFloat(currentValue.amount), 0);
          setTotalBudget(updatedTotalBudget);
      }, [budget]);
      
  return (
    <DataContext.Provider value={{
        budget, setBudget, totalBudget,expenses,setExpenses
    }}>
        {children}
    </DataContext.Provider>
  )
}