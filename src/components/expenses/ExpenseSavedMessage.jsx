import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

const ExpenseSavedMessage = () => {
  return (
    <div className='flex items-center justify-between text-white bg-green-700 p-4 rounded-lg shadow-md transition-opacity duration-1000'>
      <span className='font-medium'>Expense Saved Successfully!</span>
      <FaCircleCheck size={22} />
    </div>
  )
}

export default ExpenseSavedMessage