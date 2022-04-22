import { useTheme } from 'next-themes';
import React from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const Themes = () => {

    const { theme, setTheme } = useTheme();
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <>
            {
                theme === 'dark' ? <button onClick={changeTheme} className='flex  p-4 justify-center rounded-full  dark:text-white text-black bg-day-400 hover:bg-day-500 dark:bg-dark-200  border-indigo-500 hover:dark:bg-dark-100'>
                </button> : <button onClick={changeTheme} className='flex p-4  justify-center rounded-full  dark:text-white text-black bg-day-400 hover:bg-day-500 dark:bg-dark-200  border-indigo-500 hover:dark:bg-dark-100'>
                </button>
            }


        </>
    )
}

export default Themes