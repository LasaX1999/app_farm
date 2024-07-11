"use client";
import { ValidationError, useForm } from "@formspree/react";
import Link from "next/link";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Form() {
  const [state, handleSubmit] = useForm("xbjnwwzj");
  if (state.succeeded) {
    return <div className="bg-blue-200 p-8 ">
      <div className="flex-col justify-center">
        <h1 className="text-2xl text-black ">Thanks!</h1>
        <p className="text-lg">The form was submitted successfully.</p>
        <Link href={'/Contact'} className="font-medium text-xl text-[#E5122E]">Go Back</Link>
      </div>
    </div>;
  }

  return (

    <main>

  <Header />

   <div className="flex-col flex justify-center items-center  ">
    <h1 className="mt-3 text-xl lg:text-4xl bg-gradient-to-tl from-emerald-600 via-purple-400 to-indigo-700 bg-clip-text text-transparent">Contact Form 🔖</h1>
      <form   action="https://formspree.io/f/xbjnwwzj"  method="post" className="flex-col bg-slate-50 shadow-lg border p-10 mt-8 mb-8 rounded-md w-[50rem] "
      >
        <div className="flex-col flex gap-2 mb-4">
          <label className="text-xl" htmlFor="fullname">
            Full Name
          </label>
          <input
            required
            name="fullname"
            className="p-2 hover:border-blue-500 shadow-sm drop-shadow-lg shadow-blue-500 border-[1px] rounded-md outline-none"
            type="text"
            placeholder="Enter Your Name"
            id="fullname"
          />
        </div>

        <div className="flex-col flex gap-2 mb-4 ">
          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <input
            required
            name="email"
            className="p-2 hover:border-blue-500  shadow-sm drop-shadow-lg shadow-blue-500  border-[1px] rounded-md outline-none"
            type="email"
            placeholder="Enter Your Email"
            id="email"
          />

          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="flex-col flex gap-2 mb-4">
          <label className="text-xl" htmlFor="message">
            Message
          </label>
          <textarea
            required
            name="message"
            id="message"
            placeholder="Type your message here..."
            className="p-6 hover:border-blue-500   shadow-sm drop-shadow-lg shadow-blue-500  border-[1px] rounded-md outline-none"
          ></textarea>

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <div className="">
            <button
            type="submit"
            name="submit"
              disabled={state.submitting}
              className="py-2 px-4 bg-green-600 mt-2 rounded-md text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    <Footer/>

</main>
 
  );
}
