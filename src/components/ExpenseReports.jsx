import React from 'react'
import { FaMoneyBills } from "react-icons/fa6";

import { FaArrowUpLong } from "react-icons/fa6";
import ExpenseCount from './ExpenseCount';
import { MonthSpendChart } from './MonthSpendChart';
import CatagoryWiseExpense from './CatagoryWiseExpense';
import { MdListAlt } from "react-icons/md";

const ExpenseReports = () => {
    return (
        <div className='flex flex-col my-8 mx-6 gap-5 justify-around min-h-screen'>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='px-6 py-6 rounded-lg bg-white border  hover:shadow-lg hover:scale-102 active:scale-100 active:bg-gray-50 transition-transform duration-500 flex flex-col gap-6'>
                    <div className='flex justify-between items-center gap-30 '>
                        <h3 className='text- text-gray-500'>Total Spending</h3>
                        <button className='bg-blue-100 hover:bg-blue-200 px-2 py-4 rounded-lg text-blue-700'>
                            <FaMoneyBills size={20} />
                        </button>
                    </div>
                    <div className='flex items-center text-3xl font-bold'>
                        Rs. 42,500.30

                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <div className='flex items-center px-2 py-1 rounded-full text-green-800 bg-green-300 text-sm'><FaArrowUpLong />12%</div><h4 className='text-sm text-gray-500'>vs last month</h4>
                    </div>

                </div>

                <div className='px-6 py-6 rounded-lg bg-white border  hover:shadow-lg hover:scale-102 active:scale-100 active:bg-gray-50 transition-transform duration-500 flex flex-1 gap-6 '>
                    <div className='px-6 flex justify-center items-center'>
                        <ExpenseCount />
                    </div>
                    <div className='flex flex-1 flex-col gap-6'>
                        <h1 className='text-2xl font-bold'>Current Month Performance</h1>
                        <p className='  text-sm text-gray-500'>You've spent 85% of your Rs. 5,000 monthly budget. We recommend scaling back on non-essential spending for the next 4 days.</p>
                        <div className='flex gap-5 text-xs '>
                            <div className='bg-gray-300 px-3 py-1 rounded-md text-gray-600'>REMAINING <div className='text-gray-700 font-semibold'>Rs. 750.00</div></div>
                            <div className='bg-gray-300 px-3 py-1 rounded-md text-gray-600'>DAYS LEFT <div className='text-gray-700 font-semibold flex gap-1'><div>4</div>Days</div></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='px-6 py-6 rounded-lg bg-white border  hover:shadow-lg hover:scale-102 active:scale-100 active:bg-gray-50 transition-transform duration-500 flex flex-col gap-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-xl font-bold'>Spending Trends</h1>
                        <h2 className='bg-gray-200 px-2 py-1 text-sm font-light rounded-full'>Last 6 Months</h2>
                    </div>
                    <div>
                        <MonthSpendChart />

                    </div>
                </div>
                <div className='px-6 py-6 rounded-lg bg-white border  hover:shadow-lg hover:scale-102 active:scale-100 active:bg-gray-50 transition-transform duration-500 flex flex-1 flex-col justify-between gap-5'>

                    <div>
                        <h1 className='text-xl font-bold justify-between '>Catagory Breakdown</h1>
                    </div>
                    <div >
                        <CatagoryWiseExpense />
                    </div>


                </div>
            </div>
            <div className=' p-6 rounded-lg bg-white border  hover:shadow-lg hover:scale-102 active:scale-100 active:bg-gray-50 transition-transform duration-500 flex flex-1 flex-col justify-between '>
                <div className='flex justify-between items-center border-b py-5'>
                    <h1 className='text-xl font-bold'>
                        Recent Spendings
                    </h1>
                    <button className='border-2 hover:border-gray-300 hover:bg-blue-300 py-1 px-4 rounded-md text-sm text-blue-700  font-medium'>See History</button>

                </div>
                <div className=''>
                    <table className='w-full border-separate border-spacing-y-4 text-center'>
                    <thead className='text-sm text-gray-500 '>
                       <tr>
                         <th >DESCRIPTION</th>
                        <th >CATAGORY</th>
                        <th >DATE</th>
                        <th> AMOUNT</th>
                       </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className='flex items-center gap-5 px-5'>
                            <div className='px-1 py-2  rounded-full bg-gray-200'><MdListAlt/></div>
                            <div className='text-sm'>Amazon Marketplace</div>
                        </td>
                        <td className=' rounded-lg font-semibold text-sm'>Groceries</td>
                        <td className='text-sm'>Jun 24, 2025</td>
                        <td className='text-sm font-semibold text-red-500'>- Rs. 550</td>
                    </tr>
                    <tr>
                        <td className='flex items-center gap-5 px-5'>
                            <div className='px-1 py-2 rounded-full bg-gray-200'><MdListAlt/></div>
                            <div>Uber Technologies</div>
                        </td>
                        <td>Transport</td>
                        <td>Jun 22, 2025</td>
                    </tr>
                    </tbody>
                </table>
                </div>


            </div>
            <div className='p-2'>

            </div>

        </div>
    )
}

export default ExpenseReports