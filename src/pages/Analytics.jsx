import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { DataContext } from "../context/DataContext"

const Analytics = () => {
    const { budget } = useContext(DataContext)

  return (
    <div className="w-full flex flex-col items-center pb-8 rounded-[2rem] bg-white overflow-y-auto h-full">
        <h1 className='text-2xl font-semibold sticky top-0 z-10 bg-white w-full p-4 text-center'>All Budget</h1>
        { budget ? 
        budget.map((budget) => (
            <div className=" h-48 w-[90%] mt-4 relative rounded-lg border-2" key={budget.id}>
                    <Link to={`/budget/${budget.id}/expense`} className='flex flex-col gap-4 p-2'>
                        <h1 className='capitalize'>{budget.category}</h1>
                        <div className="flex gap-6 items-center">
                            <div className="w-16 h-16 bg-blue-400 rounded-full grid place-content-center">ENT</div>
                            <div className='w-full'>
                                <p>Budget: {budget.amount}.00$</p>
                                <div className="w-full border-2 rounded-full bg-slate-100">
                                    <span className="block w-2/5 h-4 rounded-full bg-lime-500"></span>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h1>{budget.date}</h1>
                            <div className='flex gap-2 cursor-pointer'>
                                <EditIcon fontSize='large' className='bg-lime-600 text-white rounded p-1'/>
                                <DeleteIcon fontSize='large' className='bg-red-600 text-white rounded p-1'/>
                            </div>
                        </div>
                    </Link>
                </div>
        ))
             : <p>No budget to display</p>   
        }
    </div>
  )
}

export default Analytics;