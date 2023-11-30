import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Rsidebar = () => {
  const { totalBudget, totalExpense } = useContext(DataContext)
  const total = eval(totalBudget - totalExpense)

  return (
    <div className="lg:w-96 pl-2">
      <div className="p-4 rounded-3xl">
            <div className="bg-white rounded-3xl p-6 lg:w-2xl h-1/2 w-full">
                <h1 className="border-b font-semibold pb-4 lg:text-2xl">General Statistics</h1>
                <table className="w-full h-full mt-2 bg-white">
                      <tbody className="font-medium">
                      <tr>
                        <td>Budget</td>
                        <td className="text-green-500">{totalBudget}.00$</td>
                      </tr>
                      <tr>
                        <td>Expenses</td>
                        <td className="text-red-500">-{totalExpense ? totalExpense : 0}.00$</td>
                      </tr>
                      <tr> 
                        <td>Remaining</td>
                        <td className=" text-sky-500">{total ? total : 0}.00$</td>
                      </tr>
                  </tbody>
                </table>
            </div>
          <div className="bg-white mt-5 rounded-3xl p-4 lg:w-2xl w-full h-[50vh]">
              <h2 className="font-semibold lg:text-2xl md:text-lg">Expenses by categories...</h2>
              <ul className="mt-5 h-full">
                <li className="py-4"><span className="inline-block w-4 h-4 rounded-full bg-red-500"></span> Food/Drinks</li>
                <li className="py-4"><span className="inline-block w-4 h-4 rounded-full bg-blue-500"></span> Vacation</li>
                <li className="py-4"><span className="inline-block w-4 h-4 rounded-full bg-yellow-400"></span> Transport</li>
                <li className="py-4"><span className="inline-block w-4 h-4 rounded-full bg-green-500"></span> Hobbies</li>
                <li className="py-4"><span className="inline-block w-4 h-4 rounded-full bg-purple-500"></span> other</li>
              </ul>
          </div> 
      </div>
    </div>
  )
}

export default Rsidebar;



{/* <div className="bg-white mt-5 rounded-3xl p-6 lg:w-2xl h-1/2 w-full">
  <h2 className="font-semibold lg:text-2xl md:text-lg">Expenses by categories...</h2>
  <ul className="mt-5 h-full">
    <li className="p-1"><span className="inline-block w-4 h-4 rounded-full bg-red-500"></span> Rent apartments</li>
    <li className="p-1"><span className="inline-block w-4 h-4 rounded-full bg-blue-500"></span> Vacation</li>
    <li className="p-1"><span className="inline-block w-4 h-4 rounded-full bg-yellow-400"></span> Transport</li>
    <li className="p-1"><span className="inline-block w-4 h-4 rounded-full bg-green-500"></span> Hobbies</li>
    <li className="p-1"><span className="inline-block w-4 h-4 rounded-full bg-purple-500"></span> other</li>
  </ul>
</div> 

<div className="bg-white p-6 rounded-3xl">
        <table className="w-full h-full border-2">
            <tbody>
                <tr className="border-2">
                  <th className="border text-lg">General Statistic</th>
                </tr>
                <tr>
                  <td>Budget</td>
                  <td>2000.00$</td>
                </tr>
                <tr>
                  <td>Expenses</td>
                  <td>500.00$</td>
                </tr>
                <tr> 
                  <td>Remaining</td>
                  <td>1500.00$</td>
                </tr>
            </tbody>
          </table>
      </div>


*/}