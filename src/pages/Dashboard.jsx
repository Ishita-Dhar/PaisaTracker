import React from 'react'

import Navbar from '../components/layout/Navbar'
import MobileNavlinks from '../components/layout/MobileNavlinks';

import ExpenseReports from '../components/expenses/ExpenseReports'
import History from '@/components/expenses/History';
import Budget from '@/components/expenses/Budget';
import Settings from '@/pages/Settings';
import AddExpense from '@/components/expenses/AddExpense';

import { MdOutlineDashboard } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { LuNotebookPen } from "react-icons/lu";
import { RiSettings3Line } from "react-icons/ri";



const Dashboard = () => {

  const [activePage, setActivePage] = React.useState('reports');

  const renderContent = () => {
  switch (activePage) {
    case "reports":
      return <ExpenseReports setActivePage={setActivePage} />;

    case "history":
      return <History />;

    case "budget":
      return <Budget />;

    case "settings":
      return <Settings />;

    case "add-expense":
      return <AddExpense setActivePage={setActivePage} />;

    default:
      return <ExpenseReports setActivePage={setActivePage} />;
  }
};

  return (
    <div className='h-screen flex flex-col  overflow-hidden'>
      <Navbar setActivePage={setActivePage} />
      <MobileNavlinks setActivePage={setActivePage} />

      <div className='flex flex-1 overflow-hidden'>
        
        {/* Sidebar */}
        <aside className='hidden md:flex w-64 bg-white border-r border-gray-300 p-6  flex-col justify-between'>
          <div>
            <ul className='space-y-2 text-gray-600 font-medium'>

              {/* Dashboard */}
              <li> <button 
              className='w-full flex justify-start items-center gap-2 hover:bg-blue-100 hover:scale-x-103 hover:text-blue-900 active:bg-blue-200 active:text-sm transition-transform duration-500 px-4 py-2 rounded-lg'
              onClick={() => {setActivePage('reports')}}
              ><MdOutlineDashboard size={25} /> Dashboard</button> </li>

              {/* History */}
              <li> <button 
              className='w-full flex justify-start items-center gap-2 hover:bg-blue-100 hover:scale-x-103 hover:text-blue-900 active:bg-blue-200 active:text-sm transition-transform duration-500 px-4 py-2 rounded-lg'
              onClick={() => {setActivePage('history')}}
              > <RiFileList3Line size={25} />History</button> </li>

              {/* Budget */}
              <li> <button 
              className='w-full flex justify-start items-center gap-2 hover:bg-blue-100 hover:scale-x-103 hover:text-blue-900 active:bg-blue-200 active:text-sm transition-transform duration-500 px-4 py-2 rounded-lg'
              onClick={() => {setActivePage('budget')}}
              ><LuNotebookPen size={25} />Budget</button> </li>

              {/* Settings */}
              <li> <button 
              className='w-full flex justify-start items-center gap-2 hover:bg-blue-100 hover:scale-x-103 hover:text-blue-900 active:bg-blue-200 active:text-sm transition-transform duration-500 px-4 py-2 rounded-lg'
              onClick={() => {setActivePage('settings')}}
              ><RiSettings3Line size={26} />Settings</button> </li>
            </ul>
          </div>

          <button 
          className='bg-blue-700 hover:bg-blue-800 hover:scale-x-102 hover:shadow-xl active:scale-90 transition-transform duration-500 py-2 rounded-lg text-gray-100 cursor-pointer'
          onClick={() => {setActivePage('add-expense')}}
          >+ Add Expense</button>


        </aside>


        <main className='flex flex-1 overflow-y-auto scroll-smooth hide-scrollbar bg-gray-100 '>
          {renderContent()}

        </main>

      </div>
      
    </div>
  )
}

export default Dashboard