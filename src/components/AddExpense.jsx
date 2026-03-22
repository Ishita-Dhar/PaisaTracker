import React from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";


const AddExpense = () => {
  return (

        <div className=' flex flex-col w-full items-center my-8 gap-5 min-h-screen'>
            
            
            <main className='flex-1 flex flex-col gap-5'>
                <div>
                <h1 className='text-3xl font-extrabold text-gray-900'>Add New Expense</h1>
                <p className='text-gray-500'>Log your spending to keep your budget on track</p>
            </div>
                <form action="" className='bg-white px-5 py-5 rounded-lg flex flex-col gap-5'>
                    <div className='grid grid-cols-2 gap-4' >
                        <span>
                            <label htmlFor="amount" className='text-lg text-gray-700'>Amount</label> <br />
                            <div className='flex items-center gap-2 bg-gray-100 px-2 py-3 rounded-lg text-gray-700 border border-gray-300'>
                                <FaIndianRupeeSign />
                                <input className='outline-none' type="number" name='amount' placeholder='0.0' />
                            </div>
                        </span>
                        <span>
                            <label htmlFor="date" className='text-lg text-gray-700'>Date</label> <br />
                            <div className='flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-lg text-gray-700 border border-gray-300'>

                                <input type="date" className='outline-none' />
                            </div>
                        </span>
                    </div>
                    <div>
                        <label className='text-lg text-gray-700' htmlFor="expensename">Expense Name / Description</label> <br />
                        <span className='flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-lg text-gray-700 border border-gray-300'>e.g. <input className='outline-none ' type="text" placeholder='Weekly Groceries' /></span>
                    </div>
                    <div>
                        <label className='text-lg text-gray-700' htmlFor="category">Category</label> <br />
                        <span className='flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-lg text-gray-700 border border-gray-300'>e.g. <input className='outline-none ' type="text" placeholder='Weekly Groceries' /></span>
                    </div>
                    <div>
                        
                        <label className='text-lg text-gray-700' htmlFor="note">Notes (Optional)</label> <br />
                        <textarea className='flex items-center gap-2 bg-gray-100 p-2  w-full rounded-lg text-gray-700 border border-gray-300 outline-none' type="text" name="note" id="note" placeholder='Add more details about this transaction...' rows={5}>
                            
                        </textarea>
                    
                    </div>
                    <div className='flex gap-2 '>
                        <input className='w-1/2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-5 rounded-lg hover:shadow-lg hover:scale-101 transition-transform duration-500 active:scale-96' type="submit" value='+ Add Expense' />
                        <input className='w-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-5 rounded-lg hover:shadow-lg hover:scale-101 transition-transform duration-500 active:scale-96' type="button" value='Cancel' />
                    </div>

                </form>

            </main>
        
        </div>

  )
}

export default AddExpense