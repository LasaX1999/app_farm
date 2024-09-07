"use client";

import { useEffect, useState } from "react";
import { getMeatProducts, getFruitProducts } from "@/sanity/getcategoryProducts "; // Replace with actual fetch functions
import Image from "next/image";
import { urlFor } from "@/sanity/client"; // Replace with your Sanity image URL builder

export default function CategoryAndSearchPage() {
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default to 'All'
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search input
  const [filteredProducts, setFilteredProducts] = useState([]); // State to hold filtered products

  // Fetch products based on selected category
  useEffect(() => {
    async function fetchProducts() {
      let productsData = [];

      if (selectedCategory === "Meat") {
        productsData = await getMeatProducts();
      } else if (selectedCategory === "Fruit") {
        productsData = await getFruitProducts();
      } else {
        // Fetch both categories for "All"
        const meatProducts = await getMeatProducts();
        const fruitProducts = await getFruitProducts();
        productsData = [...meatProducts, ...fruitProducts];
      }

      setProducts(productsData);
    }

    fetchProducts();
  }, [selectedCategory]);

  // Filter products by search query
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Category Filter Section */}
      <div className="flex justify-center space-x-4 mb-8">
        {["All", "Meat", "Fruit"].map((category) => (
          <button
            key={category}
            className={`py-2 px-6 border rounded-full text-gray-600 transition-all ${
              selectedCategory === category
                ? "bg-green-600 text-white"
                : "hover:bg-green-200"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search products by title"
          className="border p-2 rounded-lg w-1/2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.title}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={urlFor(product.titleImage).url()}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600 truncate">
                  {product.description}
                </p>
                <p className="text-lg font-bold text-gray-900 mt-4">
                  ${product.price}
                </p>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg transition duration-300 hover:bg-green-700 mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-xl">
          No products found matching "{searchQuery}"
        </p>
      )}
    </div>
  );
}
