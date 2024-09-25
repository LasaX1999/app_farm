"use client";
import { ValidationError, useForm } from "@formspree/react";
import Link from "next/link";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewFooter from "../components/NewFooter";

export default function Form() {
  const [state, handleSubmit] = useForm("xbjnwwzj");
  if (state.succeeded) {
    return (
      <div className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-400 via-indigo-200 to-indigo-300 mt-20 mb-10 p-16 rounded-xl shadow-2xl max-w-md mx-auto">
  <div className="flex flex-col items-center  text-center">
    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Thank You!</h1>
    <p className="text-lg text-gray-600 mb-8">
      Your submission has been received successfully.
    </p>
    <Link href="/Contact" className="inline-block py-3 px-6 bg-[#030303] text-white text-lg font-medium rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-red-300">
            Go Back
          </Link>
  
  </div>
</div>

    );
  }

  return (
    <main>
      <Header />
      <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-10 lg:py-16 mx-auto">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">Contact Us</h1>
            <p className="mt-2 text-lg text-gray-600">We'd love to talk about how we can help you.</p>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 shadow-2xl gap-8 lg:gap-20">
            <div className="flex flex-col border shadow-lg border-gray-200 rounded-xl p-6 sm:p-8 lg:p-10 bg-white ">
              <h2 className="mb-8 text-2xl  text-gray-800">Fill in the Form</h2>

              <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="hs-firstname-contacts-1" className="sr-only">First Name</label>
                      <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className="py-4 px-5 block w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500" placeholder="First Name" />
                    </div>
                    <div>
                      <label htmlFor="hs-lastname-contacts-1" className="sr-only">Last Name</label>
                      <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="py-4 px-5 block w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500" placeholder="Last Name" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="hs-email-contacts-1" className="sr-only">Email</label>
                    <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autoComplete="email" className="py-4 px-5 block w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500" placeholder="Email" />
                  </div>
                  <div>
                    <label htmlFor="hs-phone-number-1" className="sr-only">Phone Number</label>
                    <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" className="py-4 px-5 block w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500" placeholder="Phone Number" />
                  </div>
                  <div>
                    <label htmlFor="hs-about-contacts-1" className="sr-only">Details</label>
                    <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" className="py-4 px-5 block w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500" placeholder="Details"></textarea>
                  </div>
                </div>
                <div className="mt-6 grid">
                  <button type="submit" className="w-full py-4 px-5 inline-flex justify-center items-center text-base rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Send Inquiry</button>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">We'll get back to you in 1-2 business days.</p>
                </div>
              </form>
            </div>

            <div className="divide-y divide-gray-200">
              <div className="flex gap-x-8 py-8">
                <svg className="shrink-0 w-8 h-8 mt-1.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                <div className="grow">
                  <h3 className=" text-lg text-gray-800">Knowledgebase</h3>
                  <p className="mt-2 text-base text-gray-500">We're here to help with any questions or code.</p>
                  <a className="mt-3 inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-800" href="#">
                    Contact support
                    <svg className="shrink-0 w-4 h-4 ml-1.5 transition-transform transform group-hover:translate-x-1 group-focus:translate-x-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex gap-x-8 py-8">
                <svg className="shrink-0 w-8 h-8 mt-1.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
                <div className="grow">
                  <h3 className=" text-lg text-gray-800">FAQ</h3>
                  <p className="mt-2 text-base text-gray-500">Search our FAQ for answers to anything you might ask.</p>
                  <a className="mt-3 inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-800" href="#">
                    Visit FAQ
                    <svg className="shrink-0 w-4 h-4 ml-1.5 transition-transform transform group-hover:translate-x-1 group-focus:translate-x-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex gap-x-8 py-8">
                <svg className="shrink-0 w-8 h-8 mt-1.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M7 12h10M7 6h10M7 18h10" />
                </svg>
                <div className="grow">
                  <h3 className=" text-lg text-gray-800">Contact Us</h3>
                  <p className="mt-2 text-base text-gray-500">We're here to help you with any questions you may have.</p>
                  <a className="mt-3 inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-800" href="#">
                    Get in Touch
                    <svg className="shrink-0 w-4 h-4 ml-1.5 transition-transform transform group-hover:translate-x-1 group-focus:translate-x-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewFooter />
    </main>
  );
}
