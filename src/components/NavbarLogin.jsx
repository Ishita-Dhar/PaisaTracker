import React from 'react'

const NavbarLogin = () => {
  return (
    <div className='w-full flex flex-col sm:flex-row justify-between items-center gap-4 px-6 sm:px-10 py-2 border-b border-gray-300 bg-gray-50'>
        <div className='flex justify-between items-center gap-5 '>
            <img src="#" alt="logo" />
            <h1 className='text-xl font-semibold'>PaisaTracker</h1>
        </div>
        <div className='flex justify-between gap-5 items-center '>
            <p className='text-gray-500 tracking-wide'>New to PaisaTracker? </p>
            <button className='bg-blue-300/40 hover:bg-blue-300/60 cursor-pointer px-4 py-2 rounded-lg text-blue-800 font-medium'>Sign up</button>
        </div>
    </div>
  )
}

export default NavbarLogin