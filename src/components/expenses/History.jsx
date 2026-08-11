import React from 'react'
import { GrFormPrevious } from "react-icons/gr";


const filters = [
    {
        input: <input className='outline-none' type="month" name=" This Month" id="" />
    },
    {
        input: <div>
            <label htmlFor="categories">Category:</label>
            <select className='outline-none' name="categories" id="categories">
                <option value="all">All</option>
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

const expenses = [
    {
        "date": "Jun 24, 2025",
        "description": "Amazon Marketplace",
        "category": "Groceries",
        "amount": 550
    },
    {
        "date": "Jun 22, 2025",
        "description": "Uber Technologies",
        "category": "Transport",
        "amount": 320
    },
    {
        "date": "Jun 20, 2025",
        "description": "Netflix Subscription",
        "category": "Entertainment",
        "amount": 649
    },
    {
        "date": "Jun 18, 2025",
        "description": "Reliance Smart Store",
        "category": "Groceries",
        "amount": 890
    },
    {
        "date": "Jun 17, 2025",
        "description": "Swiggy Food Order",
        "category": "Food",
        "amount": 420
    },
    {
        "date": "Jun 15, 2025",
        "description": "Flipkart Purchase",
        "category": "Shopping",
        "amount": 2100
    },
    {
        "date": "Jun 14, 2025",
        "description": "Electricity Bill",
        "category": "Utilities",
        "amount": 1250
    },
    {
        "date": "Jun 12, 2025",
        "description": "BookMyShow Tickets",
        "category": "Entertainment",
        "amount": 780
    },
    {
        "date": "Jun 11, 2025",
        "description": "Petrol Pump",
        "category": "Transport",
        "amount": 1500
    },
    {
        "date": "Jun 10, 2025",
        "description": "Pharmacy Medicine",
        "category": "Health",
        "amount": 360
    },
    {
        "date": "Jun 08, 2025",
        "description": "Dominos Pizza",
        "category": "Food",
        "amount": 540
    },
    {
        "date": "Jun 07, 2025",
        "description": "Myntra Clothing",
        "category": "Shopping",
        "amount": 1800
    },
    {
        "date": "Jun 06, 2025",
        "description": "Spotify Subscription",
        "category": "Subscriptions",
        "amount": 119
    },
    {
        "date": "Jun 05, 2025",
        "description": "Internet Broadband",
        "category": "Utilities",
        "amount": 899
    },
    {
        "date": "Jun 04, 2025",
        "description": "Taxi Ride",
        "category": "Transport",
        "amount": 275
    },
    {
        "date": "Jun 03, 2025",
        "description": "Apollo Pharmacy",
        "category": "Health",
        "amount": 610
    },
    {
        "date": "Jun 02, 2025",
        "description": "BigBasket Groceries",
        "category": "Groceries",
        "amount": 1340
    },
    {
        "date": "Jun 01, 2025",
        "description": "Zomato Dinner",
        "category": "Food",
        "amount": 480
    },
    {
        "date": "May 30, 2025",
        "description": "Mobile Recharge",
        "category": "Utilities",
        "amount": 299
    },
    {
        "date": "May 28, 2025",
        "description": "Laptop Accessories",
        "category": "Shopping",
        "amount": 950
    }
]

const History = () => {
    return (
        <div className='flex flex-col my-8 mx-6 gap-6 w-full '>
            <div >
                <h1 className='text-3xl font-bold'>Transactions</h1>
                <p className='text-gray-600'>Review and manage your spendings </p>
            </div>
            <div className=' border-b-2 border-gray-400'>
                <h2 className=' text-blue-800 font-semibold  py-2 px-2 '>Expenses</h2>
            </div>


            <ul className='flex items-center gap-4'>
                {
                    filters.map((filter) => {
                        return (
                            <li className='bg-gray-200 px-2 py-1 rounded-lg text-xs border hover:border-gray-400 transition-transform duration-500'>{filter.input}</li>
                        )
                    })
                }
                <li className='text-sm text-blue-800  hover:text-blue-900 active:bg-blue-600 px-2 py-1 rounded-lg active:text-white active:scale-95 transition-transform duration-500'>
                    <button className='cursor-pointer'>Clear all filters</button>
                </li>
            </ul>
            <div className=' w-ful  overflow-y-scroll hide-scrollbar bg-white border border-gray-400 rounded-xl '>
                <table className=' border-collapse overflow-hidden text-left w-full'>
                    <thead>
                        <tr className='text-sm uppercase tracking-wider text-gray-500 border-b '>
                            <th className='px-6 py-4'>DATE</th>
                            <th className='px-6 py-4'>DESCRIPTION</th>
                            <th className='px-6 py-4'>CATEGORY</th>
                            <th className='px-6 py-4'>AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100'>
                        {
                            expenses.map((expenses, idx) => {
                                return (
                                    <tr key={idx} >
                                        <td className='px-6 py-4 text-gray-500 font-light'>{expenses.date} </td>
                                        <td className='px-6 py-4 font-medium'>{expenses.description} </td>
                                        <td className='px-6 py-4 text-xs font-semibold uppercase'>
                                            <span className=' px-2 py-1 rounded-full'>{expenses.category}</span>
                                        </td>
                                        <td className='px-6 py-4 text-red-600 font-semibold text-sm'>-RS. {expenses.amount} </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>

                    

                </table>
                {/* <div className=' py-2 px-4 space-x-4 flex justify-end items-center'>
                        <button className='bg-blue-700 px-2 py-1 rounded-md cursor-pointer text-white'><GrFormPrevious size={25} /></button>
                        <span className='border border-gray-400 px-3 py-1 rounded-md cursor-pointer '>1</span>
                        <button className='bg-blue-700 px-2 py-1 rounded-md cursor-pointer text-white'><GrFormPrevious size={25}className='rotate-180'/></button>
                </div> */}
            </div>
        </div>
    )
}

export default History