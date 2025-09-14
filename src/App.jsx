import React from "react";
import Spotlight from "./components/Spotlight";
import ProductList from "./components/ProductList";
import TopPrograms from "./components/TopPrograms";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Affiliate Dashboard</h1>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {/* Spotlight Section */}
        <Spotlight />

        {/* Products Section */}
        <ProductList />

        {/* Top Programs Section */}
        <TopPrograms />
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 mt-6">
        🚀 Affiliate Project © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
