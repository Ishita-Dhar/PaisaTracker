import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className='w-full flex  sm:flex-row justify-between items-center px-6 sm:px-10 py-2 border-b border-gray-300 bg-gray-50'>
            <div className='flex justify-center items-center gap-4' >
                <FaWallet size={30} alt="logo" className='text-blue-800' />
                <div className='hidden md:flex text-xl font-semibold flex-col justify-center items-start'>PaisaTracker <h2 className='text-sm font-light'>Personal Account</h2></div>
            </div>
            <div className='hidden md:flex bg-blue-100 hover:bg-blue-200 w-1/2 px-5 py-2 mr-5 rounded-lg justify-start items-center gap-5 text-gray-500 '><FaSearch /> <input type="text" placeholder='Search transactions, tags....' className='outline-none w-full' /></div>
            <div className='hidden md:flex '>
                <i className='relative '><FaRegBell size={30} /> <div className='absolute top-1 right-1 p-1 rounded-full bg-red-500 animate-ping active:bg-transparent'></div></i>
            </div>
            <div className='flex gap-2 md:border-l px-6 border-gray-300'>
                <div className='flex flex-col justify-center items-end'>
                    <div className='text-lg font-medium'>Username</div>
                    <div className='text-sm font-light'>Premium Member</div>
                </div>
                <div>
                    <img src="#" alt="" className='bg-blue-300 px-6 py-6 rounded-full' />
                </div>
            </div>
        </div>
    )
}

export default Navbar