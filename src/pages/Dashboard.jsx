import React from 'react'
import Navbar from '../components/Navbar'
import ExpenseReports from '../components/ExpenseReports'
import { MdOutlineDashboard } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { LuNotebookPen } from "react-icons/lu";
import { RiSettings3Line } from "react-icons/ri";
import MobileNavlinks from '../components/MobileNavlinks';
import Footer from '@/components/Footer';
import History from '@/components/History';
import Budget from '@/components/Budget';
import Settings from '@/pages/Settings';
import AddExpense from '@/components/AddExpense';

const Dashboard = () => {
  return (
    <div className='h-screen flex flex-col  overflow-hidden'>
      <Navbar />
      <MobileNavlinks/>
      <div className='flex flex-1 overflow-hidden'>
        <aside className='hidden md:flex w-64 bg-white border-r border-gray-300 p-6  flex-col justify-between'>
          <div>
            <ul className='space-y-2 text-gray-600 font-medium'>
              <li className='flex justify-start items-center gap-2 hover:bg-blue-100 hover:scale-x-103 hover:text-blue-900 active:bg-blue-200 active:text-sm transition-transform duration-500 px-4 py-2 rounded-lg'><MdOutlineDashboard size={25} /> Dashboard</li>
              <li className='flex justify-start items-center gap-2 hover:bg-blue-100 hover:scale-x-103 hover:text-blue-900 active:bg-blue-200 active:text-sm transition-transform duration-500 px-4 py-2 rounded-lg'><RiFileList3Line size={25}/>History</li>
              <li className='flex justify-start items-center gap-2 hover:bg-blue-100 hover:scale-x-103 hover:text-blue-900 active:bg-blue-200 active:text-sm transition-transform duration-500 px-4 py-2 rounded-lg'><LuNotebookPen size={25}/>Budget</li>
              <li className='flex justify-start items-center gap-2 hover:bg-blue-100 hover:scale-x-103 hover:text-blue-900 active:bg-blue-200 active:text-sm transition-transform duration-500 px-4 py-2 rounded-lg'><RiSettings3Line size={26}/>Settings</li>
            </ul>
          </div>

          <button className='bg-blue-700 hover:bg-blue-800 hover:scale-x-102 hover:shadow-xl active:scale-90 transition-transform duration-500 py-2 rounded-lg text-gray-100 cursor-pointer'>+ Add Expense</button>


        </aside>

        
        <main className='flex flex-1 overflow-y-auto scroll-smooth hide-scrollbar bg-gray-100 '>
          {/* <ExpenseReports/> */}
          <History/>
          {/* <Budget/> */}
          {/* <Settings/> */}
          {/* <AddExpense/> */}

        </main>
        
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Dashboard