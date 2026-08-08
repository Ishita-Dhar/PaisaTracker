import React from 'react'
import { useState, useEffect } from "react";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";

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
            className="flex items-center gap-1 px-3 py-1 rounded-sm
             bg-gray-200 dark:bg-blue-800 
             text-gray-800 dark:text-white text-sm font-semibold
             hover:scale-105 transition-all duration-200 shadow-sm"
        >
            {dark ? (
                <>
                    <LuSun size={20} />
                    Light
                </>

            ) : (
                <>
                    <LuMoon size={20} />
                    Dark
                </>
            )}
        </button>
    )
}

export default DarkBrightButton

