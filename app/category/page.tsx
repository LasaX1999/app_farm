"use client";

import { useEffect, useState } from "react";
import { getMeatProducts, getFruitProducts } from "@/sanity/getMeatProducts "; // Import fetch functions for each category
import Image from "next/image";
import { urlFor } from "@/sanity/client"; // Import the urlFor function
import Header from "../components/Header";
import NewFooter from "../components/NewFooter";

export default function CategoryProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("Meat");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      let productsData = [];

      if (selectedCategory === "Meat") {
        productsData = await getMeatProducts();
      } else if (selectedCategory === "Fruit") {
        productsData = await getFruitProducts();
      }

      setProducts(productsData);
    }

    fetchProducts();
  }, [selectedCategory]); // Fetch products when the selected category changes

  return (
    <main>
        <Header/>
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        {selectedCategory} Products
      </h1>

      {/* Dropdown to select category */}
      <div className="flex justify-center mb-8">
        <select
          className="border rounded-lg p-2 text-gray-600"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="Meat">Meat</option>
          <option value="Fruit">Fruit</option>
        </select>
      </div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
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
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-600 mb-2 truncate">{product.description}</p>
                <p className="text-lg font-bold text-gray-900 mb-4">
                  Price: ${product.price}
                </p>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg transition duration-300 hover:bg-indigo-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-xl">
          No {selectedCategory.toLowerCase()} products found
        </p>
      )}
      <NewFooter/>
    </main>
  );
}
