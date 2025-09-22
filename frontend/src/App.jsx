import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import ThemePage from './pages/Theme'
import Affiliate from './pages/Affiliate'
import Programs from './pages/Programs' // ✅ import mới

export default function App() {
  useEffect(() => {
    // initialize theme from localStorage
    const t = localStorage.getItem('theme') || 'light'
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(t)
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/theme" element={<ThemePage />} />
          <Route path="/programs" element={<Programs />} /> {/* ✅ route mới */}
        </Routes>
      </main>
    </div>
  )
}
