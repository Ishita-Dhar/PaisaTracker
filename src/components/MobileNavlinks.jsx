import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { LuNotebookPen } from "react-icons/lu";
import { RiSettings3Line } from "react-icons/ri";

const MobileNavlinks = () => {
  return (
    <div className='w-full overflow-scroll hide-scrollbar'>
        <ul className='min-w-screen space-x-6 flex justify-between items-center border-b border-gray-300 md:hidden'>
                      <li className=' py-4 flex justify-center items-center gap-1 border-b-3 border-transparent active:text-blue-300 active:border-blue-300 transition-transform duration-700 active:bg-gray-100 h-full w-full'><MdOutlineDashboard /> Dashboard</li>
                      <li className=' py-4 flex justify-center items-center gap-1 border-b-3 border-transparent active:text-blue-300 active:border-blue-300 transition-transform duration-700 active:bg-gray-100 h-full w-full'><RiFileList3Line />History</li>
                      <li className=' py-4 flex justify-center items-center gap-1 border-b-3 border-transparent active:text-blue-300 active:border-blue-300 transition-transform duration-700 active:bg-gray-100 h-full w-full'><LuNotebookPen />Budget</li>
                      <li className=' py-4 flex justify-center items-center gap-1 border-b-3 border-transparent active:text-blue-300 active:border-blue-300 transition-transform duration-700 active:bg-gray-100 h-full w-full'><RiSettings3Line />Settings</li>
                    </ul>
    </div>
  )
}

export default MobileNavlinks