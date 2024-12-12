"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className=" p-2 rounded-md rounded-md">
      {!showPaymentForm ? (
        <><span className=" text-2xl">Total Payment For Items :</span><button
          onClick={() => setShowPaymentForm(true)}
          className="text-white w-full py-[4px] px-3 bg-[#050505] mt-2 rounded-md  font-normal"
        >
          Pay Rs.{amount}
        </button></>
      ) : (
        <>
          {/* User Information Ui */}
          {/* <div className="max-w-lg mx-auto p-6 rounded-lg">
            <h1 className="text-3xl font-semibold mb-6 text-gray-800">
              Complete your order
            </h1>

            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-700">
                Personal Details
              </h2>

              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                />
                <input
                  type="text"
                  placeholder="Mobile No"
                  className="w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                />
              </div>

              <h2 className="text-lg font-medium text-gray-700">
                Delivery Address
              </h2>

              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                />
              </div>
            </div>
          </div> */}

          {/* New Infromation details */}
          <div className=" -mt-4 mb-6 font-sans">
                <h2 className="text-2xl font-bold text-gray-800">Your Delivery information :</h2>

                <div className="grid sm:grid-cols-2 gap-8 mt-8">
                  <div>
                    <input type="text" placeholder="Name"
                      className="p-2 rounded-md bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email address"
                      className="p-2 rounded-md bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none" />
                  </div>
                  <div>
                    <input type="text" placeholder="Street address"
                      className="p-2 rounded-md bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none" />
                  </div>
                  <div>
                    <input type="text" placeholder="City"
                      className="p-2 rounded-md bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none" />
                  </div>
                  
                </div>
              </div>

          <PaymentElement />
          {errorMessage && <div>{errorMessage}</div>}

          <button
            disabled={!stripe || loading}
            className="text-white w-full p-3 bg-black mt-2 rounded-md  disabled:opacity-50 disabled:animate-pulse"
          >
            {!loading ? "Submit Payment" : "Processing..."}
          </button>
        </>
      )}
    </form>
  );
};

export default CheckoutPage;
