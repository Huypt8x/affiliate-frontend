import React from 'react'
export default function Navbar(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img src="/logo3.png" alt="logo" className="h-8 w-8 object-contain"/>
          <span className="text-lg font-bold text-green-700">Best Affiliate</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a className="hover:text-green-600" href="#">Affiliates</a>
          <a className="hover:text-green-600" href="#">Categories</a>
          <a className="hover:text-green-600" href="#">Networks</a>
          <a className="hover:text-green-600" href="#">Promos</a>
          <a className="hover:text-green-600" href="#">Submit</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="text-sm px-3 py-1 border rounded">EN</button>
          <button className="bg-green-600 text-white px-3 py-1 rounded">Login</button>
        </div>
      </div>
    </header>
)
}
