import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({theme,setTheme}) => {

  useEffect(() => {
    // Only initialize theme if parent hasn't provided one yet.
    if (!theme) {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDarkMode ? 'dark' : 'light');
    }
  }, [theme, setTheme]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    if (theme) localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div>
      <>
      <button>
        {theme === 'dark' ? (
          <img
            onClick={() => setTheme('light')}
            src={assets.sun_icon}
            className='w-8 h-8 p-1.5 border border-gray-500 rounded-full'
            alt=""
          />
        ) : (
          <img
            onClick={() => setTheme('dark')}
            src={assets.moon_icon}
            className='w-8 h-8 p-1.5 border border-gray-500 rounded-full'
            alt=""
          />
        )}
      </button>
      </>
    </div>
  )
}

export default ThemeToggleBtn

