import React from 'react'
import { FaQuestionCircle } from "react-icons/fa";
import { IoGlobeSharp } from "react-icons/io5";
import { IoShield } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='w-full flex flex-col sm:flex-row justify-between items-center gap-4 px-6 sm:px-10 py-4 sm:py-8   bg-gray-50 border-t border-gray-300'> 
        <p className='text-gray-500 text-sm'>&copy; 2026 PaisaTracker Inc. All rights reserved.</p>
        <div className='flex items-center justify-between gap-5 text-gray-400'>
            <a><FaQuestionCircle size={20}/></a>
            <a><IoGlobeSharp size={20}/></a>
            <a><IoShield size={20}/></a>
        </div>
    </div>
  )
}

export default Footer