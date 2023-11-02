

const Rsidebar = () => {
  return (
    <div className=" w-1/4 p-4 border-2 border-red-500">
      <div className="bg-white p-6 rounded-3xl lg:w-2xl">
        <table className="w-full">
            <tbody>
                <tr className=" font-semibold lg:text-2xl md:text-lg">
                  <th>
                    General Statistic
                  </th>
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
      <div className="bg-white mt-5 rounded-3xl p-6 lg:w-2xl">
          <h2 className="font-semibold lg:text-2xl md:text-lg">Expenses by categories...</h2>
          <ul className="mt-5 h-full">
            <li className="p-1"><span className="inline-block w-4 h-4 rounded-full bg-red-500"></span> Rent apartments</li>
            <li className="p-1"><span className="inline-block w-4 h-4 rounded-full bg-blue-500"></span> Vacation</li>
            <li className="p-1"><span className="inline-block w-4 h-4 rounded-full bg-yellow-400"></span> Transport</li>
            <li className="p-1"><span className="inline-block w-4 h-4 rounded-full bg-green-500"></span> Hobbies</li>
            <li className="p-1"><span className="inline-block w-4 h-4 rounded-full bg-purple-500"></span> other</li>
          </ul>
      </div>
    </div>
  )
}

export default Rsidebar;