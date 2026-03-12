import React from 'react'

const filters = [
    {
        input: <input className='outline-none' type="month" name=" This Month" id="" />
    },
    {
        input: <div>
            <label htmlFor="categories">Category:</label>
            <select className='outline-none' name="categories" id="categories">
                <option value="groceries">Groceries</option>
                <option value="entertainment">Entertainment</option>
                <option value="bills">Bills</option>
                <option value="shopping">Shopping</option>
            </select>
        </div>
    },
    {
        input: <div>
            <label htmlFor="amount">Amount:</label>
            <select className='outline-none' name="amount" id="amount">
                <option value="">Rs.0-Rs.100</option>
                <option value="entertainment">Rs.100-Rs.500</option>
                <option value="bills">Rs.500-Rs.5000</option>
                <option value="shopping">Rs.5000 Above</option>
            </select>
        </div>
    },
]

const History = () => {
    return (
        <div className='flex flex-col my-8 mx-6 gap-5 w-full min-h-screen'>
            <div >
                <h1 className='text-3xl font-bold'>Transactions</h1>
                <p className='text-gray-600'>Review and manage your spendings </p>
            </div>
            <div className=' border-b-2'>
                <h2 className=' text-blue-800 font-semibold underline underline-offset-5 '>All Transactions</h2>
            </div>


            <ul className='flex items-center gap-4'>
                {
                    filters.map((filter) => {
                        return (
                            <li className='bg-blue-100 px-2 py-1 rounded-lg  border hover:border-gray-400 transition-transform duration-500'>{filter.input}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default History