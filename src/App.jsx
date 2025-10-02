import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import BlogPage from './pages/Blog'
import Affiliate from './pages/Affiliate'
import Programs from './pages/Programs'
import PostPage from './pages/Post'

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
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<PostPage />} />
          <Route path="/programs" element={<Programs />} />
          {/* fallback nếu không có route */}
          <Route path="*" element={<div>404 - Trang không tồn tại</div>} />
        </Routes>
      </main>
    </div>
  )
}
