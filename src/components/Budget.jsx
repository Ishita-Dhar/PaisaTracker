

import React from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Progress } from './ui/progress';
import { RiDeleteBinFill } from "react-icons/ri";
import { FaRegSave } from "react-icons/fa";

const Budget = () => {
    return (
        <div className='min-h-screen w-full bg-gray-100 flex justify-center'>
            <form className='flex flex-col w-full max-w-4xl mx-8 p-6 space-y-6'>

                {/* Header */}
                <div>
                    <h1 className='text-3xl font-extrabold text-gray-900'>
                        Set Monthly Budget
                    </h1>
                    <p className='text-gray-500'>
                        Define your spending limits and reach your financial goals.
                    </p>
                </div>

                {/* Budget Card */}
                <div className='bg-white rounded-xl py-6 px-5 hover:scale-102 transition-transform duration-500 border'>
                    <h2 className='mb-3 font-semibold'>
                        Total Monthly Budget Goal
                    </h2>

                    <div className='flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-lg'>
                        <FaIndianRupeeSign />
                        <input
                            type="text"
                            placeholder='Add Budget Value'
                            className='bg-transparent outline-none w-full'
                        />
                    </div>
                </div>

                {/* Progress Card */}
                <div className='bg-white rounded-xl p-6 hover:scale-102 transition-transform duration-500 border space-y-3'>
                    <h2 className='uppercase text-sm text-gray-500'>
                        Allocation Progress
                    </h2>

                    <h1 className='flex justify-between items-center text-xl font-bold'>
                        <span className='flex items-center gap-2'>
                            <FaIndianRupeeSign />0 of <FaIndianRupeeSign />0
                        </span>
                        <span className='text-blue-600'>0%</span>
                    </h1>

                    <Progress value={0} />

                    <p className='text-gray-500 text-sm flex items-center'>
                        You have <FaIndianRupeeSign />0 remaining to allocate to your categories.
                    </p>
                </div>

                {/* Category Section */}
                <div>
                    <div className='flex justify-between items-center mb-4'>
                        <h1 className='text-xl font-semibold'>
                            Category Limits
                        </h1>
                        <button className='text-blue-600 font-medium px-3 py-2 rounded-lg hover:bg-blue-200'>
                            + Add Category
                        </button>
                    </div>

                    {/* Category Cards */}
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='bg-white rounded-xl p-6 border hover:scale-102 transition-transform duration-500'>
                            <div className='flex justify-between items-center mb-3'>
                                <h1 className='font-medium flex items-center gap-2'>
                                    <i className='p-5 rounded-lg bg-blue-200'></i>
                                    Category Name
                                </h1>
                                <RiDeleteBinFill size={25} className='text-gray-500 hover:text-gray-600 cursor-pointer' />
                            </div>

                            <div className='flex items-center gap-2 bg-gray-200 px-3 py-2 rounded-lg'>
                                <FaIndianRupeeSign  />
                                <input
                                    type="text"
                                    className='bg-transparent outline-none w-full'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Save Button */}
                    <input type='submit' className='w-full mt-6 flex items-center justify-center font-bold gap-2 bg-blue-600 text-white px-5 py-4 rounded-lg hover:bg-blue-700 active:scale-97 transition-transform duration-500'>
                        <FaRegSave />
                        Save Budget Plan
                    </input>
                    <input type='button' className='w-full mt-2 mb-6 flex items-center justify-center font-bold gap-2  text-gray-700 px-5 py-4 rounded-lg hover:bg-gray-300 active:scale-97 transition-transform duration-500'>
                        Cancel & Go Back
                    </input>
                </div>

            </form>
        </div>
    )
}

export default Budget