import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { LuNotebookPen } from "react-icons/lu";
import { RiSettings3Line } from "react-icons/ri";

const navItems = [
  {
    name: "Dashboard",
    page: "reports",
    icon: <MdOutlineDashboard />
  },
  {
    name: "History",
    page: "history",
    icon: <RiFileList3Line />
  },
  {
    name: "Budget",
    page: "budget",
    icon: <LuNotebookPen />
  },
  {
    name: "Settings",
    page: "settings",
    icon: <RiSettings3Line />
  }
];

const MobileNavlinks = ({ setActivePage }) => {
  return (
    <div className="w-full overflow-scroll hide-scrollbar">
  <div className="min-w-screen space-x-6 flex justify-between items-center border-b border-gray-300 md:hidden">

    {navItems.map((item,idx) => (
      <div
        key={idx}
        className="py-4 flex justify-center items-center gap-1 border-b-3 border-transparent active:border-blue-300 active:bg-gray-200 transition-transform duration-700 h-full w-full group"
      >
        <button
          className="flex items-center gap-2 group-active:text-blue-300"
          onClick={() => setActivePage(item.page)}
        >
          {item.icon}
          {item.name}
        </button>
      </div>
    ))}

  </div>
</div>
  )
}

export default MobileNavlinks

