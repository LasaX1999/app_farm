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
import Header from "../components/Header";
import NewFooter from "../components/NewFooter";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import { HiMagnifyingGlass } from "react-icons/hi2";

const STEP = 1;
const MIN = 0;
const MAX = 20000;

export default function CategoryAndSearchPage() {
  type Product = {
    description: string;
    titleImage(titleImage: any): unknown;
    title: string;
    price: number;
  };
  const [selectedCategory, setSelectedCategory] = useState("All");
  // const [products, setProducts] = useState([]);

  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState([MIN, MAX]); // State to hold the price range

  //add cart 
  const { addToCart } = useCart();



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
    <div >
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-4 pb-4 pt-6 gap-8">

        {/* Sidebar for Filters */}
        <div className="lg:col-span-1 bg-white  p-6 shadow-lg border-gray-300 ml-2 border-[1px]  rounded-lg">


          {/* Search Input */}
          <div className="mb-8">
            <h3 className="text-xl text-black mb-4">Search </h3>
            <input
              type="text"
              placeholder="Search products by title  "
              className="w-full border p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filter Section */}
          <div className="mb-8">
            <h3 className="text-xl text-black mb-4">Category</h3>
            <div className="space-y-4">
              {["All", "Meat", "Fruit", "Vegetables", "Seafood"].map((category) => (
                <button
                  key={category}
                  className={`w-full py-2 px-4 border rounded-lg text-gray-600 transition-all ${selectedCategory === category
                    ? "bg-green-600 text-white"
                    : "hover:bg-green-200"
                    }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>


          {/* Price Range Slider */}
          <div className="mb-8">
            <h3 className="text-xl text-black mb-4">Price Range</h3>
            <p className="mb-4 text-gray-600">
              Rs.{priceRange[0]} - Rs.{priceRange[1]}
            </p>
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
                    className="w-full h-1 bg-gray-300 rounded-full"
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
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3 ">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1  px-2  md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.title}
                  className="bg-white shadow-md cursor-pointer border-[1px] border-gray-350 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="relative h-56  w-full">
                    <Image
                      src={urlFor(product.titleImage).url()}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg  text-black mb-2 truncate">
                      {product.title}
                    </h2>
                    <p className="text-sm text-gray-600 truncate">
                      {product.description}
                    </p>
                    <p className="text-md font-medium text-gray-900 mt-4">
                      Rs.{product.price}
                    </p>
                    <button className="w-full bg-green-700 text-white py-2 rounded-lg transition duration-300 hover:bg-green-800 mt-4"
                      onClick={() => {
                        addToCart(product);
                        toast.success('Successfully added to cart!');
                      }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-xl">
              {/* No products found matching "{searchQuery}" or within price range Rs.{priceRange[0]} - Rs.{priceRange[1]} */}
            </p>
          )}
        </div>
      </div>
      <NewFooter />
    </div>
  );
}
