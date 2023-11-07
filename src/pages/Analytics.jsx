import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { DataContext } from "../context/DataContext"

const Analytics = () => {
    const { budget, setBudget, expenses } = useContext(DataContext)

    const handleDelete = (id) => {
        setBudget(prevBudget => {
            return prevBudget.filter(budget => budget.id !== id)
        })
    }

    const bgStyles = {
        'Food/Drinks': { backgroundColor: 'rgb(220 38 38)'},
        'vacation': { backgroundColor: 'rgb(37 99 235)' },
        'Transport': { backgroundColor: ' rgb(234 179 8)'},
        'Hobbies': { backgroundColor: 'green' },
        'other': { backgroundColor: 'purple' }
    }


  return (
        <div className="w-full rounded-[2rem] h-full">
            <h1 className='text-2xl font-semibold sticky top-0 z-10 w-full p-4 border-b-2'>All Budget</h1>
            <div className='w-full flex gap-4 flex-wrap pb-8'>
                { budget.length ?
                budget.map((budget) => {
                    const Allexpense = expenses.filter(expense => expense.id == budget.id)
                    const totalExpense = Allexpense.reduce((total, currentExpense)=> total + parseFloat(currentExpense.amount), 0)
                    const percentageWidth = eval((totalExpense / budget.amount)*100) +'%'
                    const widthStyles = {
                        backgroundColor: percentageWidth < '20%' ? 'red' : percentageWidth < '60%' ? 'rgb(30 64 175)' : 'green'
                      };
                      /* 'rgb(190 18 60)' */
                      
                      const styles = {
                        width: percentageWidth,
                        ...widthStyles,
                      };

                    return(
                        <div className="mt-4 relative rounded-lg border-2 w-full p-2 hover:bg-slate-200" key={budget.id}>
                            <Link to={`/budget/${budget.id}/expense`} className='flex flex-col gap-4 p-2 w-full'>
                                <h1 className='capitalize font-semibold text-2xl'>{budget.category}</h1>
                                <div className="flex justify-between items-center">
                                    <div className="lg:w-16 lg:h-16 md:w-10 md:h-10 bg-blue-400 rounded-full grid place-content-center text-2xl text-white" style={bgStyles[budget.category]}>{budget.category[0]}</div>
                                    <div className='h-4 w-[70%] lg:w-[60%] rounded-full bg-slate-300 overflow-hidden relative'><span className='block h-full w-full rounded-full' style={styles}></span></div>
                                    <div><p className='font-semibold text-lg p-2 lg'>Budget: {budget.amount}$</p></div>
                                </div>
                            </Link>
                            <div className='flex justify-between items-center p-2'>
                                <h1>{budget.date}</h1>
                                <div className='flex gap-2 cursor-pointer'>
                                    <Link to={`/budget/edit/${budget.id}`}><EditIcon fontSize='large' className='bg-lime-600 text-white rounded p-1'/></Link>
                                    <p onClick={()=> handleDelete(budget.id)}><DeleteIcon fontSize='large' className='bg-red-600 text-white rounded p-1'/></p>
                                </div>
                            </div>
                    </div>
                    )
                    })
                    : <p className="text-3xl text-center p-6 font-semibold w-full">No Budget</p>
                }
            </div>
        </div>
  )
}

export default Analytics;



/* 
        const { budget, setBudget } = useContext(DataContext)

    const handleDelete = (id) => {
        setBudget(prevBudget => {
            return prevBudget.filter(budget => budget.id !== id)
        })
    }

    const bgStyles = {
        'Food/Drinks': { backgroundColor: 'rgb(220 38 38)'},
        'vacation': { backgroundColor: 'rgb(37 99 235)' },
        'Transport': { backgroundColor: ' rgb(234 179 8)'},
        'Hobbies': { backgroundColor: 'green' },
        'other': { backgroundColor: 'purple' },
    };


    <div className="w-full rounded-[2rem] h-full">
        <h1 className='text-2xl font-semibold sticky top-0 z-10 w-full p-4 border-b-2'>All Budget</h1>
        <div className='w-full flex gap-4 flex-wrap'>
            { budget.length ?
            budget.map((budget) => (
                <div className="mt-4 w-80 relative rounded-lg border-2" key={budget.id}>
                        <Link to={`/budget/${budget.id}/expense`} className='flex flex-col gap-4 p-2 w-full'>
                            <h1 className='capitalize'>{budget.category}</h1>
                            <div className="flex justify-between items-center">
                                <div className="w-16 h-16 bg-blue-400 rounded-full grid place-content-center text-2xl" style={bgStyles[budget.category]}>{budget.category[0]}</div>
                                <div>
                                    <p className='font-semibold'>Budget: {budget.amount}$</p>
                                </div>
                            </div>
                        </Link>
                        <div className='flex justify-between items-center p-2'>
                            <h1>{budget.date}</h1>
                            <div className='flex gap-2 cursor-pointer'>
                                <Link to={`/budget/edit/${budget.id}`}><EditIcon fontSize='large' className='bg-lime-600 text-white rounded p-1'/></Link>
                                <p onClick={()=> handleDelete(budget.id)}><DeleteIcon fontSize='large' className='bg-red-600 text-white rounded p-1'/></p>
                            </div>
                        </div>
                </div>
            ))
                : <p className="text-3xl text-center p-6 font-semibold w-full">No Budget</p>
            }
        </div>
    </div>
*/
