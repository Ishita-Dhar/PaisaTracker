import React from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useState } from 'react';
import ExportSavedMessage from './ExpenseSavedMessage';



const AddExpense = ({setActivePage}) => {

    
    const [showMessage, setShowMessage] = useState(false);
    const [errors, setErrors] = useState({});
    const [expense, setExpense] = useState({
        amount: "",
        date: "",
        description: "",
        category: "",
        notes: ""
    })


    // checking the values when user clicks Add Expense


    const validateExpense = () => {
        const newErrors = {};

        if (!expense.amount) {
            newErrors.amount = "Amount is required";
        } else if (Number(expense.amount) <= 0) {
            newErrors.amount = "Amount must be greater than 0";
        }

        if (!expense.date) {
            newErrors.date = "Date is required";
        }

        if (!expense.description.trim()) {
            newErrors.description = "Description is required";
        }

        if (!expense.category) {
            newErrors.category = "Category is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateExpense()) {
            return;
        }

        const exsistingExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
        const newExpense = {
            id: Date.now(), ...expense
        }
        // adding new expense to the existing expenses
        const updatedExpenses = [...exsistingExpenses, newExpense];

        // saving to localStorage
        localStorage.setItem("expenses", JSON.stringify(updatedExpenses));

        // Reset the form after successful submission
        setExpense({
            amount: "",
            date: "",
            description: "",
            category: "",
            notes: ""
        });
        setErrors({}); // Clear errors after successful submission
        console.log("Expense saved!");
        console.log(newExpense);

        setShowMessage(true);

        // Hide the message after 3 seconds
        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    }

    return (

        <div className=' flex flex-col w-full items-center my-8 gap-5 min-h-screen '>


            <main className='flex-1 flex flex-col gap-5 '>



                <div className="relative">
                    {
                        showMessage &&
                        <ExportSavedMessage className='absolute transition-opacity duration-1000  z-1' />
                    }
                    <h1 className='text-3xl font-extrabold text-gray-900'>Add New Expense</h1>
                    <p className='text-gray-500'>Log your spending to keep your budget on track</p>
                </div>


                {/* Form Section */}


                <form onSubmit={handleSubmit} action="" className='bg-white border hover:shadow-xl hover:scale-102 transition-transform duration-500 px-4 py-4 rounded-lg flex flex-col gap-5 '>
                    <div className='grid grid-cols-2 gap-4' >
                        <span>
                            <label htmlFor="amount" className='text-lg text-gray-700'>Amount</label> <br />
                            <div className='flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-2 py-3 rounded-lg text-gray-700 border border-gray-300'>
                                <FaIndianRupeeSign />

                                {/* Amount */}

                                <input className='outline-none' type="number" id="amount" name='amount' placeholder='0.0'
                                    value={expense.amount}
                                    onChange={(e) =>
                                        setExpense({
                                            ...expense,
                                            amount: e.target.value
                                        })
                                    }
                                />
                            </div>
                            {errors.amount && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.amount}
                                </p>
                            )}
                        </span>
                        <span>
                            <label htmlFor="date" className='text-lg text-gray-700'>Date</label> <br />
                            <div className='flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-lg text-gray-700 border border-gray-300'>

                                {/* Date */}

                                <input type="date" id="date" className='outline-none'
                                    value={expense.date}
                                    onChange={(e) =>
                                        setExpense({
                                            ...expense,
                                            date: e.target.value
                                        })
                                    }
                                />
                            </div>
                            {errors.date && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.date}
                                </p>
                            )}
                        </span>
                    </div>
                    <div>
                        <label className='text-lg text-gray-700' htmlFor="expensename">Expense Name / Description</label> <br />
                        <span className='flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-lg text-gray-700 border border-gray-300'>e.g.

                            {/* Describe your expense here < */}

                            <input className='outline-none ' type="text" id="expensename" placeholder='Weekly Groceries'
                                value={expense.description}
                                onChange={(e) =>
                                    setExpense({
                                        ...expense,
                                        description: e.target.value
                                    })
                                }
                            />
                        </span>
                        {errors.description && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.description}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className='text-lg text-gray-700' htmlFor="category">Category</label> <br />
                        <span className='flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-lg text-gray-700 border border-gray-300'>e.g.

                            {/* Category of your expense < */}

                            <select className='outline-none ' type="text" id="category" 
                                value={expense.category}
                                onChange={(e) =>
                                    setExpense({
                                        ...expense,
                                        category: e.target.value
                                    })
                                }
                            >
                                <option value="">Select Category</option>
                                <option value="Food & Dining">Food & Dining</option>
                                <option value="Groceries">Groceries</option>
                                <option value="Transportation">Transportation</option>
                                <option value="Shopping">Shopping</option>
                                <option value="Bills & Utilities">Bills & Utilities</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Health & Medical">Health & Medical</option>
                                <option value="Education">Education</option>
                                <option value="Travel">Travel</option>
                                <option value="Personal Care">Personal Care</option>
                                <option value="Finance & Investments">Finance & Investments</option>
                                <option value="Gifts & Donations">Gifts & Donations</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                        {errors.category && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.category}
                            </p>
                        )}
                    </div>
                    <div>

                        <label className='text-lg text-gray-700' htmlFor="notes">Notes (Optional)</label> <br />
                        <textarea className='flex items-center gap-2 bg-gray-100 hover:bg-gray-200 p-2  w-full rounded-lg text-gray-700 border border-gray-300 outline-none' type="text" placeholder='Add more details about this transaction...' rows={5}
                            name="notes"
                            id="notes"
                            value={expense.notes}
                            onChange={(e) =>
                                setExpense({
                                    ...expense,
                                    notes: e.target.value
                                })
                            }
                        >

                        </textarea>

                    </div>
                    <div className='flex gap-2 '>
                        <input className='w-1/2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-5 rounded-lg hover:shadow-lg hover:scale-101 transition-transform duration-500 active:scale-96' type="submit" value='+ Add Expense' />
                        <button className='w-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-5 rounded-lg hover:shadow-lg hover:scale-101 transition-transform duration-500 active:scale-96' type="button" 
                        value='Cancel' 
                        onClick={() => setActivePage('ExpenseReports')}>
                            Cancel
                        </button>
                    </div>

                </form>

            </main>

        </div>

    )
}

export default AddExpense