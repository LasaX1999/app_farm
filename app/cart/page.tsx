"use client";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Header from "@/app/components/Header";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import getStripe from "@/lib/getStripe";
import NewFooter from "../components/NewFooter";
import CheckoutPage from "@/app/components/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import EmptyCart from "../components/EmptyCart";
import { urlFor } from "@/sanity/client";
import { UserFeedback } from "../components/UserFeedback";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  // Track quantities for each product
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, product) => ({ ...acc, [product._id]: 1 }), {})
  );

  // Handle increment for a specific product
  const handleIncrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1, // Increment only for the clicked product
    }));
  };

  // Handle decrement for a specific product, preventing it from going below 1
  const handleDecrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(prevQuantities[productId] - 1, 1), // Decrement only for the clicked product
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
      const errorText = await response.text();
      console.error("Error:", errorText);
      toast.error("Something went wrong during checkout.");
      return;
    }

    const data = await response.json();
    toast.loading("Redirecting to checkout...");
    stripe.redirectToCheckout({ sessionId: data.id });
  };

  // Calculate the total amount based on product prices and quantities
  const totalAmount = cart.reduce(
    (sum, product) => sum + product.price * quantities[product._id],
    0
  );

  return (
    <div>
      <Header />
      <div className="flex flex-wrap items-center justify-center p-4">
        {cart && cart.length === 0 ? (
          <EmptyCart />
        ) : (
          cart.map((product) => (
            <div
              key={product._id}
              className="m-5 border border-gray-300 p-4 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            >
              {product.titleImage && (
                <div className="relative w-full h-48">
                  <Image
                    src={urlFor(product.titleImage).url()}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              )}
              <div className="flex flex-col text-center justify-center items-center border-t-2 border-green-400 mt-2 pt-2">
                <h2 className="text-xl font-light">{product.title}</h2>
                <p className="text-lg font-medium">
                  Rs.{product.price * quantities[product._id]} {/* Updated price */}
                </p>
                <p className="text-sm text-gray-600">{product.description}</p>

                {/* Increment/Decrement buttons */}
                <div className="flex justify-center items-center gap-4 mt-4">
                  {/* Decrement button */}
                  <button
                    className="bg-gray-300 text-black px-2 py-1 rounded"
                    onClick={() => handleDecrement(product._id)}
                  >
                    -
                  </button>

                  {/* Display quantity */}
                  <span>{quantities[product._id]}</span>

                  {/* Increment button */}
                  <button
                    className="bg-gray-300 text-black px-2 py-1 rounded"
                    onClick={() => handleIncrement(product._id)}
                  >
                    +
                  </button>
                </div>

                <div className="flex justify-center items-center gap-4 mt-4">
                  <button
                    className="mt-2 bg-red-500 text-white py-1 px-3 rounded flex items-center hover:bg-red-700 transition-colors duration-300"
                    onClick={() => {
                      removeFromCart(product._id);
                      toast.success("Removed item from cart!");
                    }}
                  >
                    <MdDelete className="mr-1" /> Delete
                  </button>
                  <button>
                    <Elements
                      stripe={stripePromise}
                      options={{
                        mode: "payment",
                        amount: product.price * quantities[product._id] ,
                        currency: "usd",
                      }}
                    >
                      <CheckoutPage amount={product.price * quantities[product._id]} />
                    </Elements>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

   

      {cart && cart.length > 0 && (
        <div className="flex justify-between items-center mt-8 p-6 bg-gray-100 rounded-lg">
          <span className="text-lg font-medium text-center">Total Amount Is : Rs.{totalAmount}</span>
          <Elements
            stripe={stripePromise}
            options={{
              mode: "payment",
              amount: totalAmount , // 
              currency: "usd",
            }}
          >
            <CheckoutPage amount={totalAmount} />
          </Elements>
        </div>
      )}
    </div>
  );
}
