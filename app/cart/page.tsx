"use client";
import { useCart } from "@/app/context/CartContext";
import Header from "@/app/components/Header";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

import getStripe from "@/lib/getStripe";
import NewShoppingCart from "../components/NewShoppingCart";
import NewFooter from "../components/NewFooter";
import CheckoutPage from "@/app/components/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import EmptyCart from "../components/EmptyCart";
import { urlFor } from "@/sanity/client";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Cart() {
  const { cart, removeFromCart } = useCart();

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
      const errorText = await response.text(); // Log the HTML or error response
      console.error("Error:", errorText);
      toast.error("Something went wrong during checkout.");
      return;
    }

    const data = await response.json();
    toast.loading("Redirecting to checkout...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  const totalAmount = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      <Header />

      <div className="flex flex-wrap items-center justify-center p-4">
        {cart && cart.length === 0 ? (
          // <h1  className="text-3xl text-center pt-4">Your Cart</h1>
          <EmptyCart />
        ) : (
          cart &&
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
                <p className="text-lg font-medium">{product.price}</p>
                <p className="text-sm text-gray-600">{product.description}</p>
                <div className="flex justify-center items-center gap-4">
                  <button
                    className="mt-2 bg-red-500 text-white py-1 px-3 rounded flex items-center hover:bg-red-700 transition-colors duration-300"
                    onClick={() => {
                      removeFromCart(product._id);
                      toast.success("Removed item from cart!");
                    }}
                  >
                    <MdDelete className="mr-1" /> Delete
                  </button>
                  <button
                  // onClick={handleCheckout}
                  >
                    <Elements
                      stripe={stripePromise}
                      options={{
                        mode: "payment",

                        amount: 100,
                        currency: "usd",
                      }}
                    >
                      <CheckoutPage amount={product.price} />
                    </Elements>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
