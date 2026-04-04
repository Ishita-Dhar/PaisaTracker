import React from 'react'
import { useState, useEffect } from "react";


const DarkBrightButton = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);

    useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);


    return (
        <button
            onClick={() => setDark(!dark)}
            className="flex items-center gap-2 px-4 py-1 rounded-full 
             bg-gray-200 dark:bg-blue-800 
             text-gray-800 dark:text-white text-sm font-semibold
             hover:scale-105 transition-all duration-200 shadow-sm"
        >
            {dark ? "Light" : "Dark"}
        </button>
    )
}

export default DarkBrightButton