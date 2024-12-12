"use client";
import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import toast from "react-hot-toast";
import getStripe from "@/lib/getStripe";
import Image from "next/image";
import Header from "@/app/components/Header";
import { urlFor } from "@/sanity/client";
import { loadStripe } from "@stripe/stripe-js";
import { MdOutlineDeleteForever } from "react-icons/md";
import EmptyCart from "../components/EmptyCart";
import CheckoutPage from "../components/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, product) => ({ ...acc, [product._id]: 1 }), {})
  );

  const handleQuantityChange = (productId: any, value: string) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: parseInt(value, 10) || 1,
    }));
  };

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    });

    if (!response.ok) {
      toast.error("Something went wrong during checkout.");
      return;
    }

    const data = await response.json();
    toast.loading("Redirecting to checkout...");
    stripe.redirectToCheckout({ sessionId: data.id });
  };

  const handleIncrement = (productId: string) => {
    setQuantities((prevQuantities: Record<string, number>) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1,
    }));
  };

  const handleDecrement = (productId: string) => {
    setQuantities((prevQuantities: Record<string, number>) => ({
      ...prevQuantities,
      [productId]: Math.max(prevQuantities[productId] - 1, 1),
    }));
  };
  const totalAmount = cart.reduce(
    (sum, product) => sum + product.price * (quantities[product._id as keyof typeof quantities] ?? 1),
    0
  );

  return (
    <div className="container mx-auto">
      <Header />
      {cart && cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="sm:flex border rounded-lg border-gray-300 shadow-lg my-10">
          {/* Cart Details */}
          <div className="w-full sm:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-medium text-2xl">Shopping Cart</h1>
              <h2 className="font-medium text-2xl">{cart.length} Items</h2>
            </div>

            {cart.map((product) => (
              <div
                key={product._id}
                className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50"
              >
                {product.titleImage && (
                  <div className="relative w-48 h-48 shadow-lg">
                    <Image
                      src={urlFor(product.titleImage).url()}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                )}
                <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                  <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                    {product.code}
                  </p>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-lg leading-none text-gray-800">
                      {product.title}
                    </p>
                    <div className="flex justify-center items-center gap-2 mt-4">
                      <button
                        className="bg-gray-300 text-black px-2 py-1 rounded"
                        onClick={() => handleDecrement(product._id)}
                      >
                        -
                      </button>
                      <span>{quantities[product._id as keyof typeof quantities] ?? 1}</span>
                      <button
                        className="bg-gray-300 text-black px-2 py-1 rounded"
                        onClick={() => handleIncrement(product._id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="text-sm font-medium leading-3 text-gray-600 pt-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-5">
                    <button
                      className="text-sm leading-3 text-red-500 cursor-pointer"
                      onClick={() => {
                        removeFromCart(product._id);
                        toast.success("Removed from cart!");
                      }}
                    >
                      Remove Item from cart
                    </button>
                    <MdOutlineDeleteForever className="text-red-500 mb-1 text-xl" />
                    <p className="text-base leading-none text-gray-800">
                      Rs.{product.price * quantities[product._id as keyof typeof quantities]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <a href="/category" className="flex font-medium text-indigo-600 text-lg mt-10">
              Continue Shopping
            </a>
          </div>
          {/* Order Summary */}
          <div className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
            <h1 className="font-medium text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-medium text-lg text-blue-500 uppercase">
                Added Items <span className="ml-1">{cart.length}</span>
              </span>
              <span className="font-medium text-lg text-red-500">Rs.{totalAmount}</span>
            </div>
            {/* MAIN PAYMENT ( TOTAL PAYMENT CART ITEMS) OPERTION STRIPE */}

            {cart && cart.length > 0 && (
              <div className="flex justify-center items-center  mt-8 p-6 bg-gray-100 rounded-lg">
                {/* <span className="text-lg mt-4 ml-2 font-medium text-center">
            Total Amount Is : Rs.{totalAmount}
          </span> */}
                <Elements
                  stripe={stripePromise}
                  options={{
                    mode: "payment",
                    amount: totalAmount, //
                    currency: "usd",
                  }}
                >
                  <CheckoutPage amount={totalAmount} />
                </Elements>
              </div>
            )}
          </div>
        </div>

      )}


    </div>
  );
}
