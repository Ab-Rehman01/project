"use client"; // Ensure it's treated as a Client Component


import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <div>
   

      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
            Welcome to <span className="text-blue-600">MyShop</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover the best products at unbeatable prices. Shop now!
          </p>
        </div>
      </section>

      {/* Product List Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Product Cards */}
            <div className="bg-white border rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold text-gray-700">Product 1</h3>
              <p className="text-gray-600">High-quality product description.</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                View Details
              </button>
            </div>
            <div className="bg-white border rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold text-gray-700">Product 2</h3>
              <p className="text-gray-600">High-quality product description.</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                View Details
              </button>
            </div>
            <div className="bg-white border rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold text-gray-700">Product 3</h3>
              <p className="text-gray-600">High-quality product description.</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
