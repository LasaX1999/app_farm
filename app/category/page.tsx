"use client";

import { useEffect, useState } from "react";
import { Range } from "react-range";
import {
  getMeatProducts,
  getFruitProducts,
  getVegitablesProducts,
  getSeafoodProducts,
} from "@/sanity/getcategoryProducts "; // Replace with actual fetch functions
import Image from "next/image";
import { urlFor } from "@/sanity/client"; // Replace with your Sanity image URL builder

const STEP = 1;
const MIN = 0;
const MAX = 20000;

export default function CategoryAndSearchPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([MIN, MAX]); // State to hold the price range

  // Fetch products based on selected category
  useEffect(() => {
    async function fetchProducts() {
      let productsData = [];

      if (selectedCategory === "Meat") {
        productsData = await getMeatProducts();
      } else if (selectedCategory === "Fruit") {
        productsData = await getFruitProducts();
      } else if (selectedCategory === "Vegetables") {
        productsData = await getVegitablesProducts();
      } else if (selectedCategory === "Seafood") {
        productsData = await getSeafoodProducts();
      } else {
        const meatProducts = await getMeatProducts();
        const fruitProducts = await getFruitProducts();
        const vegitableProducts = await getVegitablesProducts();
        const seafoodProducts = await getSeafoodProducts();
        productsData = [
          ...meatProducts,
          ...fruitProducts,
          ...vegitableProducts,
          ...seafoodProducts,
        ];
      }

      setProducts(productsData);
    }

    fetchProducts();
  }, [selectedCategory]);

  // Filter products by search query and price range
  useEffect(() => {
    let filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Filter by price range
    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(filtered);
  }, [searchQuery, priceRange, products]);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Category Filter Section */}
      <div className="flex justify-center space-x-4 mb-8">
        {["All", "Meat", "Fruit", "Vegetables", "Seafood"].map((category) => (
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

      {/* Price Range Slider */}
      <div className="mb-8">
        <p className="text-center mb-4">Price Range: ${priceRange[0]} - ${priceRange[1]}</p>
        <div className="flex justify-center items-center">
          <Range
            step={STEP}
            min={MIN}
            max={MAX}
            values={priceRange}
            onChange={(values) => setPriceRange(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className="w-1/2 h-1 bg-gray-300 rounded-full"
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="h-4 w-4 bg-green-600 rounded-full focus:outline-none"
              />
            )}
          />
        </div>
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
          No products found matching "{searchQuery}" or within price range ${priceRange[0]} - ${priceRange[1]}
        </p>
      )}
    </div>
  );
}
