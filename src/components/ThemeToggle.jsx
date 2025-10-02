import React, {useState, useEffect} from 'react'

export default function ThemeToggle(){
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  useEffect(()=>{
    document.documentElement.classList.remove('light','dark')
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <button 
      onClick={()=> setTheme(prev => prev === 'light' ? 'dark' : 'light')}
      className='px-3 py-1 border rounded-full text-sm bg-white/20'
      aria-label='Toggle theme'
    >
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  )
}
